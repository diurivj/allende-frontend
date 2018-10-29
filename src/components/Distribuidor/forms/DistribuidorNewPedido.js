import React from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, DatePicker } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(value) {
    console.log('changed', value);
}
function onChange(date, dateString) {
    console.log(date, dateString);
}

export const DistribuidorNewPedido  = () => {
    return(
        <div >
            <Form >
                <h4>Distribuidor</h4>
                {/* <FormItem label="Fecha de entrega requerida">
                    <DatePicker  onChange={onChange} />
                </FormItem> */}

                <div className="flexito">
                    <FormItem label="IPA" style={{ width:"60%" }}>
                        <InputNumber  min={1} max={100} defaultValue={10} onChange={onChange} />
                    </FormItem>
                    <FormItem label="IPA" style={{ width:"60%" }}>
                        <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                    </FormItem>
                    <FormItem label="IPA" style={{ width:"60%" }}>
                        <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                    </FormItem>
                    <FormItem label="IPA" style={{ width:"60%" }}>
                        <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                    </FormItem>
                </div>
                <FormItem >Total: $400.00</FormItem>

                <FormItem label="Comentarios">
                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                </FormItem>
                <span style={{fontSize:"10px"}}>Recuerda que tu fecha limite de pago es: </span>

            </Form>

        </div>
    );
}
