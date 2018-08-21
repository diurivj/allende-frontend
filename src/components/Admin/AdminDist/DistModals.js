import {Modal} from 'antd';

const confirm = Modal.confirm;

export const showDeleteConfirm=() => {
  confirm({
    title: '¿Estas seguro que quieres eliminar este distribuidor?',
    content: 'Una vez efectuado este cambio no se podrá restablecer.',
    okText: 'Si',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
} 