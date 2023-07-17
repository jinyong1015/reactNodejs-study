
# reactNodejs-study
----
1. Node JS, EXPRESS 다운 
2. MONGO DB 연결
    - 5.0 이상 version 부터 callback 함수 지원 x 
3. BodyParser& PostMan & 회원가입 기능 추가
4. Nodemon 설치
5. mongoDB 비밀정보 보호 관리 기능 추가
6. Bcrypt로 비밀번호 암호화 하기 (보안성 강화)
7. Bcrypt로 로그인 기능 추가
8. jsonwebtoke으로 토큰 생성
9. Auth 기능 추가
10. 로그아웃 기능 추가



# 힘들었던 점 
logout에는 성공했지만 mongodb에서 token이 사라지지 않아 해결하기 까지 몇 시간을 계속 붙잡고 있었다 . . . 
실제 localhost에서는 브라우저에서 자동으로 x_auth를 받아오지 못하므로  req.cookies.x_auth로 직접 넣어줘야 함
----
local host코드
---
app.get("/logout", auth, (req, res) => {
  //req.user를 미들웨어에서 가져올 수 있다.
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
        return res.status(200).send({ success: true });
     });
  });