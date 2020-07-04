const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ApplicationSchema = new Schema({
  
  name :{
    type:String,
  },
  email:{
    type : String
  },
  bio : {
    type:String,
  },
  expectation:{
    type:String,
   },
   mentorName : {
     type:String,
   },
   mentorId : {
    type:String
   },
});

module.exports = Application = mongoose.model("application", ApplicationSchema);
