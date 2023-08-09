
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
11. create-react-app (npm install -g create-react-app / npx create-react-app . ) 
12. CRA to ReactNodejs-study file
13. react-router-dom 설치
14. Axios 설치 (npm install axios --save)
15. CORS 이슈 해결을 위한 Proxy 설정 (npm install http-proxy-middleware --save / yarn add http-proxy-middleware ) 설치 후 setupProxy.js에서 설정
16. client와 server를 동시에 시작 시켜주는 Concurrently (npm install concurrently --save) 설치 후 package.json script 부분에서 "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\"" 입력
17. Antd CSS Framework (npm install antd --save) 설치 이 후 import 'antd/dist/antd.css' 이외에도 Material UI CSS Framework도 있음 
18. Redux 설치 ( redux, react-redux, redux-promis, redux-thunk)
19. 로그인 페이지 구현 + redux
20. 회원가입 페이지 구현 + redux
21. 로그아웃 구현


antd 
- 설치 : npm install antd
- 경로설정 : import 'antd/dist/antd.css'
-----

## 힘들었던 점 

logout에는 성공했지만 mongodb에서 token이 사라지지 않아 해결하기 까지 몇 시간을 계속 붙잡고 있었다 . . . <br>
실제 localhost에서는 브라우저에서 자동으로 x_auth를 받아오지 못하므로  req.cookies.x_auth로 직접 넣어줘야 함

----

### local host코드

---
app.get("/logout", auth, (req, res) => { <br>
  //req.user를 미들웨어에서 가져올 수 있다. <br>
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => { <br>
    if (err) return res.json({ success: false, err }); <br>
        return res.status(200).send({ success: true }); <br>
     }); <br>
  });