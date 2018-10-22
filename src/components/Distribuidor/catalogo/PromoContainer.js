import React, { Component } from 'react';
import '../Admin.css';
import {CardPromoDisplay} from './CardPromoDisplay';
import {getPromos} from '../../../services/promoService'
import { toastr } from 'toastr';

class PromoContainer extends Component {
    state = {
        promos: [],

      }

      componentWillMount(){
        this.getPromos()
      }
    
      getPromos = () => {
        getPromos()
        .then(promos=>{
          this.setState({promos})
        })
        .catch(e=>{
          console.log(e)
          toastr.error("No se pudieron cargar")
        })
      }
    render() {
        const {promos} = this.state
        return (
            <div className="pedidos">
                <h2>Promociones</h2>
                <br/>
                <div className="fl" style={{justifyContent:"center"}}>
                {promos.map((p,i)=><CardPromoDisplay key={i}  {...p} />)}
                </div>
            </div>
        );
    }
}

export default PromoContainer;