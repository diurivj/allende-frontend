import React from 'react';
import './CardDist.css';
import { Card } from 'antd';

const { Meta } = Card;

export const CardPromoDisplay  = () => {
    return(
        <Card className="card_promo" style={{margin:"10px"}} hoverable>
            <h2>Fiebre Mundialista</h2>
            <div className="flex box_promo" style={{alignItens:"flex-start"}}>
                <div className="photo">
                    <img src="http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png" alt=""/>
                </div>
                <div className="inf_card">
                    <p>3 cajas mundialistas + mochila + vaso</p>
                </div>
                <div className="price">
                    <p>$400.00</p>
                </div>
            </div>
        </Card>
    )
};