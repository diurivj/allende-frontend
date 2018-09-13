import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;


export const AlertaModal  = () => {
    return(
        <Form >
            <FormItem label="Contenido de la Alerta">
                <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
            </FormItem>

        </Form>
    )
};