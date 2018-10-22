import React, {Component} from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;



export const NewProspectoModal  = ({name, adress, telefono, comments}) => {

        return (
            <div>
                <Form >
                    <FormItem label="Nombre o Razón Social">
                        <Input name="name" value={name} placeholder="Razón Social"/>
                    </FormItem>
                    <FormItem label="Dirección">
                        <Input name="adress" value={adress} placeholder="Dirección completa"/>
                    </FormItem>
                    <FormItem label="Teléfono">
                        <Input name="telefono" value={telefono} placeholder="55 555 55 55"/>
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea name="comments" value={comments} autosize={{ minRows: 2, maxRows: 6 }} placeholder="Comentarios u anotaciones"/>
                    </FormItem>

                </Form>
            </div>
        )
    };
