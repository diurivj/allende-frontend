import React, {Component} from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;




class NewClienteModal extends Component {

    render() {

        return (
            <div>
                <Form >
                    <FormItem label="Nombre o Razón Social">
                        <Input />
                    </FormItem>
                    <FormItem label="Dirección">
                        <Input />
                    </FormItem>
                    <FormItem label="Teléfono">
                        <Input />
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>

                </Form>
            </div>
        );
    }
}

export default NewClienteModal;