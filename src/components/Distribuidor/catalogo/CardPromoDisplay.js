import React from 'react';
import './CardDist.css';
import { Card } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const { Meta } = Card;

export const CardPromoDisplay  = ({name, descript, price, stock}) => {
    return(
        <div className="card_promo">
            <div className="photo">
                <img src="https://www.bierful.com/blog/wp-content/uploads/2017/04/FederalCerveceri%CC%81aBanner.jpg" alt=""/>
            </div>
            <div className="box_promo">
                <h2>{name}</h2>
                <p>{descript}</p>

                <span>Precio: $ {price}</span>
                <br/>
                <span>Stock: {stock}</span>
            </div>
    </div>
    )
};