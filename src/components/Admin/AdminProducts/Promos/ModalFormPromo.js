import React from 'react';
import {Form, Input, Upload, Icon} from 'antd';

export const ModalFormPromo = () => {
    return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Item>
                <Input type="text" placeholder="ID" required />
            </Form.Item>
            <Form.Item>
                <Input type="text" placeholder="Nombre" required />
            </Form.Item>
            <div style={{display:"flex"}}>
                <Form.Item style={{width:"50%", padding:"0 1% 0 0"}}>
                    <Input type="number" placeholder="Precio (24 unidades)" required/>
                </Form.Item>
                <Form.Item style={{width:"50%", padding:"0 0% 0 1%"}}>
                    <Input type="number" placeholder="Stock" required/>
                </Form.Item>
            </div>
            <div style={{display:"flex"}}>
                <Form.Item style={{width:"33.35%", padding:"0 1% 0 0"}}>
                    <Input type="text" placeholder="Fermentacion" required/>
                </Form.Item>
                <Form.Item style={{width:"33.35%", padding:"0 1% 0 0"}}>
                    <Input type="text" placeholder="Alc. Vol" required/>
                </Form.Item>
                <Form.Item style={{width:"33.35%", padding:"0 0% 0 0"}}>
                    <Input type="text" placeholder="IBUS" required/>
                </Form.Item>
            </div>
            <div style={{display:"flex"}}>
                <Form.Item style={{width:"33.34%", padding:"0 1% 0 0"}}>
                    <Input type="text" placeholder="Color" required/>
                </Form.Item>
                <Form.Item style={{width:"33.34%", padding:"0 1% 0 0"}}>
                    <Input type="text" placeholder="Aroma" required/>
                </Form.Item>
                <Form.Item style={{width:"33.34%", padding:"0 0% 0 0"}}>
                    <Input type="text" placeholder="Sabor" required/>
                </Form.Item>
            </div>
            <div style={{display:"flex"}}>
                <Form.Item style={{width:"50%", padding:"0 1% 0 0"}}>
                    <Input type="text" placeholder="Tiempo de elaboracion" required/>
                </Form.Item>
                <Form.Item style={{width:"50%", padding:"0 0% 0 1%"}}>
                    <Input type="text" placeholder="Temperatura recomendada" required/>
                </Form.Item>
            </div>
            <Form.Item>
                <Input type="text" placeholder="Maridaje" required/>
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

