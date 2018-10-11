import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'; //router
import configureStore from "./redux/store/configureStore"; //redux
import {Provider} from 'react-redux'; //redux
import 'antd/dist/antd.css';//antd
import 'toastr/build/toastr.css';
import { LocaleProvider } from 'antd';
import sp from 'antd/lib/locale-provider/es_ES';
import * as actions from './redux/actions/productsActions';

export const store = configureStore();

store.dispatch(actions.checkUser());

const WithRouter = () => (
    <BrowserRouter>
        <LocaleProvider locale={sp}>
            <App/>
        </LocaleProvider>
    </BrowserRouter>
);

const ReduxProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);

ReactDOM.render(<ReduxProvider />, document.getElementById('root'));
registerServiceWorker();
