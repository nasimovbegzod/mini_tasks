import React from 'react'
import img3 from './images/Screenshot_3.png'
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <div className="container">
        <hr />
        <div className="footer">
          <ul>
            <li className='title'>Категории </li>
            <li>Мужское</li>
            <li>Женское</li>
            <li>Детское </li>
          </ul>
          <ul>
            <li className='title'>О нас</li>
            <li>Контакты</li>
            <li>О компании</li>
            <li>Правила</li>
          </ul>
          <ul>
            <li className='title'>Мой аккаунт</li>
            <li>Войти</li>
            <li>Заказы</li>
            <li>желаний</li>
          </ul>
          <ul>
            <li className='title'>+998 ( 99 ) 280 75 76</li>
            <li>example@gmail.com</li>
            <li>example@mail.ru</li>
            <li><img src={img3} alt="social networks" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer