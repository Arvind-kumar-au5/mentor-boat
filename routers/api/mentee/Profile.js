const express = require('express');
const config = require('config');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');
const checkObjectId = require('../../../middleware/CheckObjectId');

const MenteeProfile = require('../../../models/Mentee/User')



/* @ProfileApi route-end point /api/mentee/profile/:user_id
   @des single mentee profile
   @access Public
*/

router.get('/:user_id',checkObjectId('user_id'),
    async({params : {user_id} },res)=>{
        console.log(user_id)
        try {
            const profile =await MenteeProfile.findOne({"_id":user_id})
            if (!profile) return res.status(400).json({ msg: 'Profile not found' });
            return res.json(profile);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }
    }
)

// @route    DELETE /api/mentee/profile
// @desc     Delete user 
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
     
      // Remove profile
      await MenteeProfile.findOneAndRemove({ _id: req.user.id });
   
  
      res.json({ msg: 'User deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  // @route    PUT api/profile/update
  // @desc     Add Profile
  // @  access  Private

  router.put(
    '/update',
    [
      auth
    ],
    async (req, res) => {
        console.log(req.user.id)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        name,
        email
      } = req.body;
  
      const newProfile = {
       name,
       email
      };
  
      try {
        let profile = await MenteeProfile.findOneAndUpdate(
            { _id: req.user.id },
            { $set: newProfile },
            { new: true, upsert: true }
          );
          res.json(profile);
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

module.exports = router
