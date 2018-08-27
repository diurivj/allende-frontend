import React from 'react';
import './CardDist.css';
import { Card } from 'antd';

const { Meta } = Card;



export const CardProductDisplay  = () => {
    return(
        <Card className="card_p" style={{margin:"10px"}} hoverable
        >
            <h2>IPA</h2>
            <div className="flex" style={{alignItens:"flex-start"}}>
                <div className="product_img">
                    <img src="http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png" alt=""/>
                </div>
                <div className="inf_card">
                    <p>Fermentación: </p>
                    <p>Alc. Vol.: </p>
                    <p>IBUS: </p>
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