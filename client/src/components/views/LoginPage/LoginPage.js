import { Axios } from 'axios'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user.action';
// import { useNavigate } from 'react-router-dom';
// react-router-dom 버전이 업데이트 되면서 useNavigate를 사용해야 함.
// version downupgrade로 useNavigate를 사용하지 않음. 


function LoginPage(props) {

  const dispatch = useDispatch();

  // let navigate = useNavigate();


  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 페이지가 리프레쉬 되는 것을 막아줌
    
    let body = {
      email : Email,
      password : Password
    }

    dispatch(loginUser(body)).then(response => {
      if(response.payload.loginSuccess) {
        // navigate('/'); 
        props.history.push('/');
      } else {
        alert('Error');
      }
    });

    // Axios.post('/api/users/login', body)
    // .then(response => {
      
    // })


  };

  return (
    <div style={{
      display : 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
    
    <form style = {{ display:'flex', flexDirection: 'column'}}
      onSubmit={onSubmitHandler}
    >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} />

          <br />
          <button type="submit">
            Login
          </button>

    </form>

    </div> 
  )
}

export default LoginPage
