import React from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, Button, Icon, Table} from 'antd';
import moment from 'moment'
import 'moment/locale/es'

// import FontAwesome from "react-fontawesome"
const { Column, ColumnGroup } = Table;

const FormItem = Form.Item;




export const PedidoDetail  = ({_id, discount, total, products, createdAt, arrivalDate}) => {
    // let total = selected.reduce((acc, p)=>{
    //     return acc + p.total
    // },0)
    let withDiscount = total
    if(discount) withDiscount = total - (total*(discount / 100))
    return(
        <div >
            <Form >
                <h4>Pedido id: {_id} </h4>
                <h4>Fecha de pedido: {createdAt && moment(createdAt).format("ll")}</h4>
                <h4>Fecha de entrega: {arrivalDate && moment(arrivalDate).format("ll")}</h4>
                {/* <FormItem label="Fecha de entrega requerida">
                    <DatePicker  onChange={onChange} />
                </FormItem> */}
            
                <Table 
                dataSource={products}
                rowKey="_id" >
                        <Column
                            title="Nombre"
                            dataIndex="name"
                            key="name"
                        />
            
                        <Column
                            title="Cantidad"
                            dataIndex="quantity"
                            key="quantity"
                        />
                        <Column
                            title="Precio/u"
                            dataIndex="price"
                            key="price"
                            render={data=>`$ ${data} MXN`}
                        />
                          <Column
                            title="Total"
                            dataIndex="total"
                            key="total"
                            render={data=>`$ ${data} MXN`}
                        />
                        {/* <Column
                            title="Eliminar"
                            dataIndex="remove"
                            key="remove"
                            render={(data, o)=><Button type="primary" onClick={()=>removeProduct(o)} >Eliminar</Button>}
                        /> */}



                    </Table>




                <FormItem >subtotal: ${typeof total === "number" && total.toFixed(2)}</FormItem>
                <FormItem >Descuento: {discount} %</FormItem>
                <FormItem >Total: ${withDiscount.toLocaleString(2,{ minimumFractionDigits: 2 })} MXN</FormItem>

                <span style={{fontSize:"10px"}}>Recuerda que tu fecha limite de pago es: </span>

            </Form>

        </div>
    );
}

export default PedidoDetail