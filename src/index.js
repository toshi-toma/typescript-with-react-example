import React, { Component } from "react";
import ReactDOM from "react-dom";
import CounterContainer from "./js/components/container/CounterContainer";

const rootEl = document.getElementById('root')
rootEl ? ReactDOM.render(<CounterContainer />, rootEl) : false;