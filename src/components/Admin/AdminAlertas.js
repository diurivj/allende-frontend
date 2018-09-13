import React, { Component } from 'react';
import { Transfer, Button, Modal } from 'antd';
import './Administrador.css';
import {AlertaModal} from './AlertaModal';

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
    });
}

const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);

class AdminDashboard extends Component {

    state = {
        targetKeys,
        selectedKeys: [],
    visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
        alert("Estas seguro de mandar estas alertas?")
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }
    render() {
        const state = this.state;
        return (
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Alertas</h2>
                <br/>
                <Transfer className="dat"
                    dataSource={mockData}
                    titles={['Borrador', 'Enviadas']}
                    targetKeys={state.targetKeys}
                    selectedKeys={state.selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                />
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Agregar Alerta</Button>
                <Modal
                    title="Agrega una nueva alerta"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <AlertaModal />
                </Modal>

            </div>
            </div>
        );
    }
}

export default AdminDashboard;