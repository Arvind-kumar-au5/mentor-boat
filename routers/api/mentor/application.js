const express = require('express')
const router = express.Router()
const {check,validationResult } = require('express-validator')
const Application = require('../../../models/Mentor/Application')
var gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const normalize = require('normalize-url');
const jwt = require('jsonwebtoken');
const config = require('config');
// @route    GET api/applications
// @desc     Get all Application
// @access   Public


  

module.exports = router