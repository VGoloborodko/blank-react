import React from "react";
import "./style.css";
import Counter from "./Counter";

class App extends React.Component {
    render() {
        return (
            <div className="main_block">
                <Counter />
            </div>
        );
    }
}

export default App;