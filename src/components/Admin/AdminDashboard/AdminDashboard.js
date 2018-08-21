import React, { Component } from 'react';
import ChartContainer from './ChartContainer';


class AdminDashboard extends Component {
  render() {
    return (
      <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
        <ChartContainer />
      </div>
    );
  }
}

export default AdminDashboard;