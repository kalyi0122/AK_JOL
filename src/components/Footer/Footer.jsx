import React from 'react'
import "./Footer.scss"
import { FaPhone } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import image1 from "../../assets/png/image1.png"
import facebook from ".././../assets/svg/facebook.svg"
import contact from "../../assets/svg/contact.svg"
import telegramm from "../../assets/svg/tg.svg"
import whatsapp from "../../assets/svg/watsap.svg"
function Footer() {
  return (
    <div>
      <div className='zlat'>
        <img src={image1} alt="" />
        <h1>Златоустовские ножи интернет-магазин "ЗЛАТМАКС"</h1>
        <p>Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.</p>
      </div>
      <div className='Footer'>
        <div className='container'>
          <div className='content'>
            <h2>ИНФОРМАЦИЯ</h2>
            <div className='flex'>
              <h3>Златоустовские ножи <br />
                в Москве и Московской <br />
                области</h3>
              <h3>Ножевые стали</h3>
              <h3>О нас</h3>
              <h3>Условия оплаты <br />
                и доставки</h3>
              <h3>Политика
                конфиденциальности</h3>
            </div>
          </div>
          <div className='container2'>
            <h2>СЛУЖБА ПОДДЕРЖКИ</h2>
            <div className='flex'>
              <h3>Контактная информация</h3>
              <h3>Возврат товара</h3>
              <h3>Карта сайта</h3>
            </div>
          </div>
          <div className='container3'>
            <h2>ДОПОЛНИТЕЛЬНО</h2>
            <div className='flex'>
              <h3>Подарочные сертификаты</h3>
              <h3>Партнеры</h3>
              <h3>Товары со скидкой</h3>
            </div>
          </div>
          <div className='container4'>
            <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
            <div className='flex'>
              <h3>Личный кабинет</h3>
              <h3>История заказов</h3>
              <h3>Мои закладки</h3>
              <h3>Рассылка новостей</h3>
            </div>
          </div>
        </div>
        <div className='hr'></div>
        <div className='container5'>
          <h2> КОНТАКТЫ</h2>
          <div className='flex'>
            <div className='num'>
              <FaPhone className='faPhone' />
              <h3>8 (800) 777-49-67</h3>
            </div>
            <div className='num'>
              <GoClock />
              <h3>Пн-Пт <br />
                7:00 - 16:00 (МСК)</h3>
            </div>
            <div className='num'>
              <BsFillGeoAltFill />
              <h3>Златоуст,<br />
                ул. Шоссейная,<br />
                д. 1, офис «6Б»</h3>
            </div>
            <div className='num'>
              <MdEmail />
              <h3>info@zlatmax.ru</h3>
            </div>
            <div className='site'>
              <img src={facebook} alt="" />
              <img src={contact} alt="" />
              <img src={telegramm} alt="" />
              <img src={whatsapp} alt="" />
            </div>

          </div>
        </div>
        <div className='container6'>
          <h2>ПОЛЕЗНЫЕ ССЫЛКИ</h2>
          <h3>Способы оплаты и доставки</h3>
        </div>
        <div className='container7'>
          <h2>НАША ГАРАНТИЯ</h2>
          <h3>Недовольны своей покупкой? <br /><br />
            Вы можете вернуть ее в течении <br /><br />
            30 дней с даты получения,<br />
            согласно <a href="">нашим правилам</a></h3>
        </div>
        <div className='container8'>
          <h2> НОВОСТНАЯ РАССЫЛКА</h2>
          <h3>Подпишитесь прямо сейчас!</h3>

          <div className='inp'>
            <input type="email" placeholder='example@gmail.com' />
            <button><FaChevronRight className='btn' /></button>
          </div><br />
          <div className='sogl'>
            <input type="checkbox"></input>
            <h3>Я прочитал Условия соглашения и <br />
              согласен с условиями </h3>
          </div>
        </div>
        <div className='hrr'></div>
        <div className='content2'>
          <p>Все материалы, размещенные на сайте, носят справочный характер и не являются <br />
            публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации. <br />
            При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>
          <h4>Златоустовские ножи www.zlatmax.ru ©</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
