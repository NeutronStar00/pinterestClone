const mongoose = require('mongoose');
const dotenv = require('dotenv');
const plm = require("passport-local-mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const userSchema = mongoose.Schema({
  email:{type:String, require:true, unique:true},
  name:{type:String, require:true},
  username:{type:String, require:true, unique:true},
  profilepic:{type:String},
  password:{type:String, require:true},
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);

