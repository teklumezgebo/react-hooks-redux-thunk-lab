import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import catsReducer from "./features/cats/catsSlice.js"

import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(catsReducer, composedEnhancer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));