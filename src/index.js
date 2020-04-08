import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./Reducers";
import middleWare from "./Middlewares"

const store = createStore(reducer,middleWare);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
