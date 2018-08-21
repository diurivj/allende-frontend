import React from 'react';
import { Input } from 'antd';

const Buscador = ({busqueda}) => {
  return (
    <div>
          <Input
      placeholder="Busqueda"
      onChange={value => busqueda(value.target.value)}
      style={{ width: '300px', margin:'20px' }}
    />
    </div>
  );
};

export default Buscador;