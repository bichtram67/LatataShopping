import React, { useEffect } from 'react'
import HeaderLogin from '../components/Login/HeaderLogin'
import LoginForm from '../components/Login/LoginForm'
import '../sass/login/login.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
    const { user } = useSelector(state => state.user)

    

    useEffect(() => {

      console.log(user?.role)

        if(user?.role == "admin")
          {
                navigate('/admin')
          } 
        if(user?.role == "user"){
                navigate('/')
          }
            
        
    },[user])
  return (
    <div className='bg-login'>

      
      <HeaderLogin/>
      <LoginForm/>
    </div>
  )
}

export default Login



