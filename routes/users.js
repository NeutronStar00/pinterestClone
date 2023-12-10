const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://anshul1202singh:NyLBea2NZhDg3gKQ@cluster0.xvgt87m.mongodb.net/");

const userSchema = mongoose.Schema({
  email:{type:String, require:true, unique:true},
  name:{type:String, require:true},
  username:{type:String, require:true, unique:true},
  profilepic:{type:String},
  pssword:{type:String, require:true},
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);

