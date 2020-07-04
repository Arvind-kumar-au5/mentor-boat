const express = require('express')
const router = express.Router()
const auth = require('../../../middleware/auth')
const User = require('../../../models/Mentee/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer')
const async = require('async')
const crypto = require('crypto')
var smtpTransport = require('nodemailer-smtp-transport');




/* @userApi route-end point api/user/password/forgot
   @des for forgot password
   @access Public
*/

router.post('/forgot',(req,res)=>{
    async.waterfall([
        function(done){
            crypto.randomBytes(20,function(err,buffer){
                var token = buffer.toString('hex');
                done(err, token);
            })
        },
        // 1 step check email
        function(token,done){
            User.findOne({email:req.body.email},(err,user)=>{
                if(!user){
                    return res.status(400).json([{
                        errors:[{ msg: 'No account with that email address exists.' }]
                    }])
                }
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        
                user.save(function(err) {
                  done(err, token, user);
                });
            })
        },
        // send mail
        function(token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'arvind.intellial@gmail.com',
                    pass: 'hiAvi@786'
                }
            });
            var mailOptions = {
              to: user.email,
              from: 'arvind.intellial@gmail.com',
              subject: 'Mentee Password Reset',
              text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
              res.send(mailOptions)
              done(err, 'done');
            });
          }
    ], function(err) {
        if (err){
            console.log(err)
        }
      });
})

module.exports = router
