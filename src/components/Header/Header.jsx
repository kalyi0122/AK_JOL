import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { FiMapPin } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/svg/logo.svg"
import "./Header.scss"

function Header() {
    return (
        <>
            <div className='blackHeader'>
                <div className='blHeaderLeft'>
                    <li>О нас</li>
                    <li>Оплата и доставка</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </div>
                <div className='blHeaderRight'>
                    <RxAvatar className='avatar' />
                    <h1>Личный кабинет</h1>
                </div>
            </div>
            <div className='whiteHeader'>
                <img className='logo' src={logo} alt="" />
                <div className='searchHeader'>
                    <input type="text" placeholder='Поиск' />
                    <CiSearch className='lupa'/>
                </div>
                <div className='headerRight'>
                    <div className='cityHeader'>
                        <FiMapPin className='map' />
                        <h2>Бишкек</h2>
                    </div>
                    <div className='numberHeader'>
                        <h1>8-800-777-49-67</h1>
                        <h2>Заказать звонок</h2>
                    </div>
                    <CiHeart className='heartHeader' />
                    <IoCartOutline className='cartHeader' />
                    <div className='zakazHeader'>
                        <h1>0 р.</h1>
                        <h2>Оформить заказ</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
