import React from 'react'
import fon from '../assets/Фон.png'
import logo from '../assets/Логотип.svg'
import './Email.css'

export const Email = () => {
  return (
    <div className='Email'>
      <img src={fon} />
      <div className="fonAbsolute">
        <img src={logo} />
        <h2>Подпишитесь на E-mail рассылку</h2>
        <p>Если хотиет быть в курсе последних новостей и новинок кино - <br />заполните форму ниже и оформите бесплатную E-mail рассылку! </p>
        <div className="inputEmail">
          <input type="text" placeholder='Введите свой E-mail адрес' />
          <button>Подписаться</button>
          
        </div>
        <div className="checoxRegister">
            <input type="checkbox"></input> <p>Соглашаюсь на условия политики конфиденциальности</p>
        </div>
      </div>
    </div>
  )
}
