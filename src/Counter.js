import React from "react";
import "./style.css";
import Button from "./Button";

class Counter extends React.Component {
    state = {
        count: 0
    };

    addButton() {
        if (this.state.count === 10) {
            console.log('КОНЕЦ');
        } else {
            this.setState({count: ++this.state.count})
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    delButton() {
        if (this.state.count === -10) {
            console.log('КОНЕЦ');
        } else {
            this.setState({count: --this.state.count})
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    addButtons = this.addButton.bind(this);
    delButtons = this.delButton.bind(this);

    render() {
        return (
            <div className="counter">
                <Button name="-" func={this.delButtons} />
                <p>{this.state.count}</p>
                <Button name="+" func={this.addButtons} />
            </div>
        );
    }
}

export default Counter;