import React from 'react';
import { Icon } from 'antd';

export const Alerta = ({
    text, _id, name
}) => {
  return(
        <div className="single">
            <Icon className="i" type="exclamation-circle-o" />
            <p>{text}</p>
    </div>
  )
};

