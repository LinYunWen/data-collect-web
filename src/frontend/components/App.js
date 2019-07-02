import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { Header } from "./Header";
import { Content } from "./Content";
import { Notification } from "./Notification";
import { AppModal } from "./AppModal";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppModal />
                <Notification />
                <Header />
                <Content />
            </div>
        )
    }
}

export default App;
