import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {NewCounter} from "./Counter/NewCounter";

function App() {


    return (
        <div className="appWrapper">
            <NewCounter/>
            {/*<Counter/>*/}
        </div>
    );
}

export default App;



