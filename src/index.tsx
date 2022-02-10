import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


const reducer = (state: any, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);


reportWebVitals();
