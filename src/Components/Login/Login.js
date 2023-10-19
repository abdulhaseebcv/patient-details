import React, { useState } from 'react'
import { InputField, SubContainer, Logo, MainContainer, UserDetails, LoginContainer, Label, Button, Details } from './LoginStyle'
import logo from '../../assets/images/Group 366.png'
import { BsTelephone } from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserData, setUserData] = useState([]);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Email and Password required');
    } else {

      // Login request with email and password 
      // axios.post('https://accesslabbeta.stagingserverhub.com/api/b2b/login',{
      //     client_id: "ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa",
      //     client_secret: "Yjq2KXplGi6Niarcp1gn6PP7OrMDlP",
      //     user_name: email,
      //     password: password,
      //     grant_type:"client_credentials"
      // }).then((res)=>{
      //   console.log(res.result.data);
      //   setUserData(res?.result?.data)
      //   navigate('/dashboard',{state:res?.result?.data})
      // }).catch((error)=>{
      //   console.log(error);
      // })
      navigate('/dashboard')
    }
  }
  return (
    <MainContainer>
      <SubContainer>
        <Logo src={logo} />
        <p>Report Downlad portal</p>
        <LoginContainer>
          <p>Login</p>
          <Details>
            <label>Username</label>
            <InputField value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email id' />
          </Details>
          <Details>
            <label>Password</label>
            <InputField value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Details>
          <Button onClick={handleLogin}>Submit</Button>
          <p>Reset Password</p>
        </LoginContainer>
        <p><span><BsTelephone /> </span>(+91) 9288008801</p>
        <p>I hereby agree and accept the <span>Terms of service</span> and <span>Privacy policy</span></p>
      </SubContainer>
    </MainContainer>
  )
}

export default Login