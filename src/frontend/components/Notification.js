import React from 'react';
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import cls from "../style.scss";

export class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: true
        };
    
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <Toast isOpen={this.state.show} className={cls.notification}>
                <ToastHeader toggle={this.toggle}>Toast title</ToastHeader>
                <ToastBody>
                    Lorem ipsum dolor sit amet, 
                </ToastBody>
            </Toast>
        );
    }
}
