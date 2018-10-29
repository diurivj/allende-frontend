import React from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, Button, Icon, Table} from 'antd';
import FontAwesome from "react-fontawesome"
const { Column, ColumnGroup } = Table;

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

let val
let num

function handleChange(value) {
    val = value
}

function onChange(value) {
    num = value
}


export const DistribuidorNewPedido  = ({commentsChange, promos=[],products=[], addProduct, addPromo, selected=[],discount=false, removeProduct}) => {
    let total = selected.reduce((acc, p)=>{
        return acc + p.total
    },0)
    let withDiscount = total
    if(discount) withDiscount = total - (total*(discount / 100))
    return(
        <div >
            <Form >
                <h4>Distribuidor</h4>
                {/* <FormItem label="Fecha de entrega requerida">
                    <DatePicker  onChange={onChange} />
                </FormItem> */}
                <p>Genera tu pedido</p>
                <div className="flexito">
                    
                    <FormItem label="Producto">
                        <Select style={{ width: 120 }} onChange={handleChange}>
                            {products.map((p,i)=><Option key={i} value={p._id}>{p.name}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="Caja(24pzas)">
                       <InputNumber  min={1} max={100} defaultValue={0} onChange={onChange} />
                    </FormItem>

                    <FormItem label=" ">
                       <Button onClick={()=>addProduct(val, num)} type="primary">Agregar</Button>
                    </FormItem>
                </div>
                <div className="flexito">
                    
                    <FormItem label="Promoción">
                        <Select style={{ width: 120 }} onChange={handleChange}>
                            {promos.map((p,i)=><Option value={p._id} key={i}>{p.name}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="Pieza">
                       <InputNumber min={1} max={100}  defaultValue={0} onChange={onChange}/>
                    </FormItem>

                    <FormItem label=" ">
                    <Button onClick={()=>addPromo(val, num)} type="primary">Agregar</Button>
                    </FormItem>
                </div>
                <Table 
                dataSource={selected}
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
                        />
                          <Column
                            title="Total"
                            dataIndex="total"
                            key="total"
                        />
                        <Column
                            title="Eliminar"
                            dataIndex="remove"
                            key="remove"
                            render={(data, o)=><Button type="primary" onClick={()=>removeProduct(o)} >Eliminar</Button>}
                        />



                    </Table>




                <FormItem >subtotal: ${total}</FormItem>
                <FormItem >Descuento: {discount} %</FormItem>
                <FormItem >Total: ${withDiscount.toLocaleString(2,{ minimumFractionDigits: 2 })} MXN</FormItem>

                <FormItem label="Comentarios">
                    <TextArea onChange={commentsChange} autosize={{ minRows: 2, maxRows: 6 }} />
                </FormItem>
                <span style={{fontSize:"10px"}}>Recuerda que tu fecha limite de pago es: </span>

            </Form>

        </div>
    );
}
