import React from 'react'
import "./Wish.scss"
import max from "../assets/svg/max.png"
import png from "../assets/svg/1.png"
import max2 from "../assets/svg/max2.png"
import max3 from "../assets/svg/max3.png"
import max4 from "../assets/svg/max4.png"
function Wish() {
  return (
    <div>
      <div className='container'>
        <div className='display'>

        <div className='image'>
          <img src={max} alt="" /><br />
          <div className='fomage'>
            <img src={png} className='box' alt="" />
            <img className='box1' src={max2} alt="" />
            <img className='box2' src={max3} alt="" />
            <img className='box3' src={max4} alt="" />
          </div>
        </div>
        <div className='wishTxt'>
          <div className='rate'>
            <div className="wishTxt">
              <div className="rate">
                <h2>Нож Снегирь</h2>

                {/* ⭐⭐⭐⭐⭐ рейтинг */}
                <div className="stars">
                  ★★★★★
                </div>

                {/* Наличие */}
                <p className="stock">В наличии</p>

                {/* Характеристики */}
                <ul className="params">
                  <li><strong>Артикул:</strong> AF0000001952</li>
                  <li><strong>Торговая марка:</strong> WUESTHOF (Германия)</li>
                  <li><strong>Серия:</strong> Ножи серии Classic Ikon</li>
                  <li><strong>Бонусные баллы:</strong> 38</li>
                </ul>


                <h3 className="price">3 865 ₽</h3>


                <div className="buttons">
                  <button className="cartBtn">В корзину</button>
                  <button className="buy1Click">Купить в 1 клик</button>
                </div>
                <div className="selectBlock">

                  <div className="param">
                    <span>Сталь</span>
                    <select>
                      <option>Выбрать сталь</option>
                    </select>
                  </div>

                  <div className="param">
                    <span>Рукоять</span>
                    <select>
                      <option>Выбрать рукоять</option>
                    </select>
                  </div>

                  <div className="param">
                    <span>Гарда и тыльник</span>
                    <select>
                      <option>Выбрать гарда и тыльник</option>
                    </select>
                  </div>

                  <div className="param">
                    <span>Обработка клинка</span>
                    <select>
                      <option>Выбрать обработку клинка</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Wish
