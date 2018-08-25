import React, { Component } from 'react';
import '../Admin.css';
import {CardPromoDisplay} from './CardPromoDisplay';

class PromoContainer extends Component {
    render() {
        return (
            <div className="pedidos">
                <h2>Promociones</h2>
                <br/>
                <div className="fl" style={{justifyContent:"center"}}>
                    <CardPromoDisplay/>
                    <CardPromoDisplay/>
                </div>
            </div>
        );
    }
}

export default PromoContainer;