const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name : {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, 
    // trim의 기능 ex) jin yong => jinyong  띄어쓰기 붙여주는 효과
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number, 
    // number로 관리자, 일반유저 지정
    default: 0 
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }