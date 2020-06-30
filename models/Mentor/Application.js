const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ApplicationSchema = new Schema({
  
  application: [{ type: Schema.Types.ObjectId, ref: 'applied' }],
 
});

module.exports = Application = mongoose.model("application", ApplicationSchema);
