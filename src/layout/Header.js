import React from 'react'
import logo from './images/header_menu-logo.svg'
import icon1 from './images/manicon.svg'
import icon2 from './images/hearticon.svg'
import icon3 from './images/carticon.svg'
import '../Global.scss'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className='container'>
        <div className='NavLeft'><Link to={'/'}><img src={logo} alt="nimadir" /></Link></div>
        <div className='NavCenter'>
          {/* <button className='btn1'>Katalog</button> */}
          {/* <input type="text" placeholder='Maxsulotlar va turkumlar izlash' /> */}
        </div>
        <div className='NavRight'>
          <div>
            <ul>
              <li><Link to={'../SinglePage'}>Мужское</Link></li>
              <li><Link to={'../SinglePage'}>Женское</Link></li>
              <li> <Link to={'../Contact'}>Детские</Link></li>
              <li><Link to={'../Sorted'}>Сделка</Link></li>
              <li><Link to={'../Sorted'}>Безопасная</Link></li>
              <li><Link to={'../Sorted'}>Правило Пользование</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to={'../SinglePage'}><img src={icon2} alt="" /></Link></li>
              <li><Link to={'../SinglePage'}><img src={icon1} alt="" /></Link></li>
              <li><button><Link to={'../SinglePage'}>Contact Us</Link></button></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container navbottom">
        <input type="text" placeholder='Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... '/>
      </div>
    </header>
  )
}

export default Header