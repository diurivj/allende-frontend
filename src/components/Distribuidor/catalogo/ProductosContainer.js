import React, { Component } from 'react';
import '../Admin.css';
import {CardProductDisplay} from './CardProductDisplay';
import { getProducts} from '../../../services/productService'
import toastr from "toastr"

class ProductosContainer extends Component {
    state = {
        products: []
      }

      componentWillMount(){
        this.getProducts()
      }
    
      getProducts = () => {
        getProducts()
        .then(products=>{
          this.setState({products})
        })
        .catch(e=>{
          console.log(e)
          toastr.error("No se pudieron cargar")
        })
      }

    render() {
        const { products} = this.state;

        return (
            <div className="pedidos">
                <h2>Productos</h2>
                <br/>
                <div className="fl" style={{justifyContent:"center"}}>
                {products.map((p,i)=><CardProductDisplay key={i}  {...p} />)}
               
            </div>

            </div>
        );
    }
}

export default ProductosContainer;