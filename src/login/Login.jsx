import React from 'react'
import logo from '../assets/Логотип.svg'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='Login'>
      <div className="topLogo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Зарегестрироваться</h1>
      <form className='form'>
        <input type="text" name="input" className='input' placeholder='Логин, почта или телефон'></input>
        <input type="text" name="input" className='input' placeholder='Ваш пароль'></input>
        <button className='voiti'> Войти
          </button>
        <button className='zaregestr'>
          <Link to='/register'>
            Зарегистрироваться
          </Link></button>

      </form>
    </div>
  )
}
