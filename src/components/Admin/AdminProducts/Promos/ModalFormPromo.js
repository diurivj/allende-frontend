import React from 'react';
import {Form, Input, Upload, Icon} from 'antd';
const { TextArea } = Input;

export const ModalFormPromo = ({
    onChange,
    name, 
    price,
    stock,
    descript
}) => {
    return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Item>
                <Input name="name" value={name} onChange={onChange} type="text" placeholder="Nombre" required />
            </Form.Item>
            <div style={{display:"flex"}}>
                <Form.Item style={{width:"50%", padding:"0 1% 0 0"}}>
                    <Input name="price" value={price} onChange={onChange} type="number" placeholder="Precio" required/>
                </Form.Item>
                <Form.Item style={{width:"50%", padding:"0 0% 0 1%"}}>
                    <Input name="stock" value={stock} onChange={onChange} type="number" placeholder="Stock" required/>
                </Form.Item>
            </div>
            <Form.Item>
                <TextArea name="descript" value={descript} onChange={onChange} placeholder="Descripción de la promoción" rows={4} required=""/>
            </Form.Item>
            <Form.Item>
                <p>Imagen</p>
                <Upload.Dragger name="file" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                        <Icon type="picture" />
                    </p>
                    <p className="ant-upload-text">Haz click o arrastra el archivo aquí</p>
                </Upload.Dragger>
            </Form.Item>
        </Form>
    )
};

