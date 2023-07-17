const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form/urlencoded 분석
app.use(bodyParser.json()); // application/json 분석

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save().then(() => {
      res.status(200).json({success:true})

    }). catch((err) => {
      return res.json({success:false,err})
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
