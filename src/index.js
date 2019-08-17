import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';


const store = createStore(rootReducer);

//提供Provider组件，可以让容器组件拿到state。　
//<Provider>组件的作用就是为了将state更加方便地传递给容器组件。
//毕竟Provider的唯一功能就是传入store对象。
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();