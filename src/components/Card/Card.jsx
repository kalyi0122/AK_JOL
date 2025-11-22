import React from "react";
import "./Card.scss";
import star from "../../assets/svg/star.svg"
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";



function Card() {
  return (
    <>
      <div className="card">
        <img src="" alt="" />
        <h1>Нож лиса</h1>
        <div className="materialCard">
          <p>95х18</p>
          <p>Орех, Алюминий</p>
        </div>
        <div className="rate">
          <div>
            {
              [1, 2, 3, 4, 5].map((item) => (
                <img className="star" src={star} key={item} alt="" />
              ))
            }
          </div>
          <p>12 отзывов</p>
        </div>
        <div className="line"></div>
        <div className="price">
          <h1>2719 р.</h1>
          <div className="priceIcons">
            <GiScales className="scales"/>
            <CiHeart className="heart"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
