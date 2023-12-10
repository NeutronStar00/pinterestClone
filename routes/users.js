const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pin");

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

