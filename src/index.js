import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App.js";

class Index extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<Index />, rootElement);