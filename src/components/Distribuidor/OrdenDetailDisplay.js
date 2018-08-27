import React from 'react';
import photo from '../../assets/logo.png';

export const OrdenDetailDisplay  = () => {
    return(
        <div className="pedidos" style={{backgroundColor:"#eeeeee"}}>
            <div style={{backgroundColor:"white", padding:"30px 0"}}>
                <h2>Resumen del pedido #2390</h2>
                <br/>
                <div className="pedido flexin" style={{width:"60%", margin:"0 auto", height:"auto"}}>
                    <div className="une">
                        <p>Cliente 1 </p>
                        <p>RFC: 12345678 </p>
                        <p>Status: </p>

                    </div>
                    <div className="deux" >
                    </div>
                </div>
                <br/>
                <div style={{width:"70%", margin:"0 auto"}}>
                    <div className="fl tb">
                        <div className="tl">
                            <h3>Foto</h3></div>
                        <div className="tl">
                            <h3>Descripción</h3></div>
                        <div className="tl">
                            <h3>Precio</h3></div>
                    </div>
                    <div className="fl tb" style={{height:"100px"}}>
                        <div className="detail_photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="descript">
                            <p>Cerveza Agave</p>
                            <p>Código: 2345334</p>
                            <p>Presentación: 24</p>
                        </div>
                        <div className="price">
                            <p>$500.00</p>
                        </div>
                    </div>
                    <div className="fl tb" style={{height:"100px"}}>
                        <div className="detail_photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="descript">
                            <p>Cerveza Agave</p>
                            <p>Código: 2345334</p>
                            <p>Presentación: 24</p>
                        </div>
                        <div className="price">
                            <p>$500.00</p>
                        </div>
                    </div>
                    <div className="fl tb" style={{height:"100px"}}>
                        <div className="detail_photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="descript">
                            <p>Cerveza Agave</p>
                            <p>Código: 2345334</p>
                            <p>Presentación: 24</p>
                        </div>
                        <div className="price">
                            <p>$500.00</p>
                        </div>
                    </div>
                    <br/>
                    <div className="rigth">
                        <p ><strong>Total:</strong>$1,500.00</p>
                    </div>
                </div>
            </div></div>
    )
};