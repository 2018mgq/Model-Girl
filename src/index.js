import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobStyle} from "./reset";
import App from './App';


ReactDOM.render(
    <Fragment>
        <App />
        <GlobStyle/>
    </Fragment>
    , document.getElementById('root'));


