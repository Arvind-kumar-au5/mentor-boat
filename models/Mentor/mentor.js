const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const MentorSchema = new Schema({

  first_name: {
    type: String,
   
  },
  last_name: {
    type: String,
    
  },
  email:{
      type:String,
  },
  password: {
    type: String,
    
  },
  job_title:{
      type:String,
  },
  location:{
      type:String
  },
  highest_eduction:{
      type:String
  },
//   Mentorship question
  category:{
        type:String
  },
  tags:{
    type: [String],
    required:true
  },
  monthly_fee:{
    type:Number
  },
  bio:{
      type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("mentor", MentorSchema);
