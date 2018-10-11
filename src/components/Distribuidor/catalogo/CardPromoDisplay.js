import React from 'react';
import './CardDist.css';
import { Card } from 'antd';

const { Meta } = Card;

export const CardPromoDisplay  = () => {
    return(
        <div className="card_promo">
            <div className="photo">
                <img src="https://www.bierful.com/blog/wp-content/uploads/2017/04/FederalCerveceri%CC%81aBanner.jpg" alt=""/>
            </div>
            <div className="box_promo">
                <h2>Fiebre Mundialista</h2>
                <p>3 cajas mundialistas + mochila + vaso</p>

                <span>$400.00</span>
            </div>
    </div>
    )
};