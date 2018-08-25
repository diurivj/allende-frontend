import React, { Component } from 'react';
import '../Admin.css';
import {CardProductDisplay} from './CardProductDisplay';

class ProductosContainer extends Component {
    render() {
        return (
            <div className="pedidos">
                <h2>Productos</h2>
                <br/>
                <div className="fl" style={{justifyContent:"center"}}>
                <CardProductDisplay />
                <CardProductDisplay />
            </div>

            </div>
        );
    }
}

export default ProductosContainer;