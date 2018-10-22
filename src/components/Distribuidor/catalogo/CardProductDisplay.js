import React from 'react';
import './CardDist.css';
import { Card } from 'antd';

const { Meta } = Card;



export const CardProductDisplay  = ({
    stock,
    fermentation,
    alc_vol,
    ibus,
    color,
    aroma,
    sabor,
    elab_time,
    temp,
    pairing,
    name,
    price,
    photoURL}) => {
    return(
        <Card className="card_p" style={{margin:"10px"}} hoverable
        >
            <h2>{name}</h2>
            <div className="flex" style={{alignItens:"flex-start"}}>
                <div className="product_img">
                    <img src="http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png" alt=""/>
                </div>
                <div className="inf_card">
                    <p>Fermentación: {fermentation}</p>
                    <p>Alc. Vol.: {alc_vol}</p>
                    <p>IBUS: {ibus}</p>
                    <p>Color: </p>
                    <p>Aroma: </p>
                    <p>Sabor: </p>
                    <p>Tiempo de elaboración: </p>
                    <p>Temperatura recomendad: </p>
                    <p>Maridaje: </p>

                </div>
            </div>
        </Card>
    )
};