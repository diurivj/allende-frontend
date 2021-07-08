import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'; //router
import 'antd/dist/antd.css';//antd
import 'toastr/build/toastr.css';
import { LocaleProvider } from 'antd';
import sp from 'antd/lib/locale-provider/es_ES';

const WithRouter = () => (
    <BrowserRouter>
        <LocaleProvider locale={sp}>
            <App/>
        </LocaleProvider>
    </BrowserRouter>
);



ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
