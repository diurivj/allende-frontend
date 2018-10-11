import React from 'react';
import {Card} from 'antd'

const ViewDist = ({props}) => {
  console.log(props);
  return (
    <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
            <Card title="Ditribuidor" style={{margin:'20px', width: '80%' }}>

      </Card>
    </div>
  );
};

export default ViewDist;