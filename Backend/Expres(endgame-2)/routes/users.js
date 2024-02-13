const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testingendagme2');
// mongoose.connect('mongodb://127.0.0.1:27017');


const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  desription: String,
  type: Array,
  categories: {
    default:[],
  },
  datecreated: {
    type: Date,
    default:Date.now(),
  }
})


module.exports =  mongoose.model("user", userSchema);