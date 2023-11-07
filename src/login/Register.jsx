import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Логотип.svg'
import './Login.css'

export const Register = () => {
  return (
    <div className='Login'>
      <div className="topLogo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Зарегистрироваться</h1>
      <form className='form'>
        <input type="text" name="input" className='input' placeholder='Имя'></input>
        <input type="text" name="input" className='input' placeholder='Фамилия'></input>
        <input type="text" name="input" className='input' placeholder='Придумайте логин'></input>
        <input type="text" name="input" className='input' placeholder='Придумайте пароль'></input>
        <input type="text" name="input" className='input' placeholder='Повторите пароль'></input>
        <input type="text" name="input" className='input' placeholder='Номер телефона или e-mail'></input>
        <div className="checoxRegister">
            <input type="checkbox"></input> <p>Соглашаюсь на условия политики конфиденциальности</p>
        </div>
        <div className="checoxRegister">
        <input type="checkbox"></input> <p>Соглашаюсь на обработку персональных данных</p>
        </div>

        <button className='voiti'>
          <Link to='/register'>
          Зарегистрироваться
          </Link>
          </button>

      </form>
    </div>
  )
}