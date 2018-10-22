import React from 'react';
import {Form, Input, Upload, Icon} from 'antd';

export const ModalForm = ({
  onChange,
  stock,
  fermentation,
  alc_vol,
  ibus,
  color,
  aroma,
  sabor,
  elab_time,
  temp,
  pairing,
  name,
  price,
  photoURL
}) => {
  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Item>
        <Input name="name" onChange={onChange} type="text" placeholder="Nombre" value={name} required />
      </Form.Item>
        <div style={{display:"flex"}}>
      <Form.Item style={{width:"50%", padding:"0 1% 0 0"}}>
        <Input name="price" type="number" onChange={onChange} placeholder="Precio (24 unidades)" value={price} required/>
      </Form.Item>
      <Form.Item style={{width:"50%", padding:"0 0% 0 1%"}}>
        <Input name="stock" type="number" onChange={onChange} placeholder="Stock" value={stock} required/>
      </Form.Item>
        </div>
        <div style={{display:"flex"}}>
        <Form.Item style={{width:"33.35%", padding:"0 1% 0 0"}}>
            <Input name="fermentation" type="text" onChange={onChange} placeholder="Fermentacion" value={fermentation} required/>
        </Form.Item>
        <Form.Item style={{width:"33.35%", padding:"0 1% 0 0"}}>
            <Input name="alc_vol" type="text" onChange={onChange} placeholder="Alc. Vol" value={alc_vol} required/>
        </Form.Item>
        <Form.Item style={{width:"33.35%", padding:"0 0% 0 0"}}>
            <Input name="ibus" type="text" onChange={onChange} placeholder="IBUS" value={ibus} required/>
        </Form.Item>
        </div>
        <div style={{display:"flex"}}>
        <Form.Item style={{width:"33.34%", padding:"0 1% 0 0"}}>
            <Input name="color" type="text" onChange={onChange} placeholder="Color" value={color} required/>
        </Form.Item>
        <Form.Item style={{width:"33.34%", padding:"0 1% 0 0"}}>
            <Input name="aroma" type="text" onChange={onChange} placeholder="Aroma" value={aroma} required/>
        </Form.Item>
        <Form.Item style={{width:"33.34%", padding:"0 0% 0 0"}}>
            <Input name="sabor" type="text" onChange={onChange} placeholder="Sabor" value={sabor} required/>
        </Form.Item>
        </div>
        <div style={{display:"flex"}}>
        <Form.Item style={{width:"50%", padding:"0 1% 0 0"}}>
            <Input name="elab_time" type="text" onChange={onChange} placeholder="Tiempo de elaboracion" value={elab_time} required/>
        </Form.Item>
        <Form.Item style={{width:"50%", padding:"0 0% 0 1%"}}>
            <Input name="temp" type="text" onChange={onChange} placeholder="Temperatura recomendada" value={temp} required/>
        </Form.Item>
        </div>
        <Form.Item>
            <Input name="pairing" type="text" onChange={onChange} placeholder="Maridaje" value={pairing} required/>
        </Form.Item>
      <Form.Item>
        <p>Imagen</p>

        {photoURL && <img src={photoURL}/>}
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

