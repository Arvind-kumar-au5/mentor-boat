const express = require('express')
const router = express.Router()
const {check,validationResult } = require('express-validator')
const Application = require('../../../models/Mentor/Application')
const MentorShema = require('../../../models/Mentor/mentor')
var gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const normalize = require('normalize-url');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../../middleware/auth');





// Application post by mentee
router.post('/:mentorName',auth, async(req,res)=>{
    const {
        bio,
        expectation,
        name,
        email
    } = req.body
    

    const application = new Application({
        bio,
        expectation,
        mentorName:req.params.mentorName,
        user:req.user.id,
        name,
        email
      })
    try {
        // Using upsert option (creates new doc if no match is found):
        application.save()
        res.json({
            msg:'success',
            application
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})







// application get in mentor dashboard
router.get('/:mentorName',auth, async(req,res)=>{
    console.log("hello")
    
    try {
        const applied = await Application.find({ mentorName: req.params.mentorName }).populate('user',['name','avatar','_id'])
        console.log(applied)
       
        res.json(applied)
        
    } catch (error) {
        console.log(error)
        
    }
  
})

// application get in mentee dashbord
router.get('/request/:name',auth,async (req,res)=>{
    try {
      
        const applied = await Application.find({ name: req.params.name })
        console.log(applied)
       
        res.json(applied)
        
    } catch (error) {
        console.log(error)
        
    }
      
})

router.get('/mentee/application', auth, async (req, res) => {
    try {
      const profile = await Application.findOne({
        user: req.user.id
      }).populate('user', ['name', 'avatar']);
  
      if (!profile) {
        return res.status(400).json({ msg: 'There is no profile for this user' });
      }
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


  

module.exports = router