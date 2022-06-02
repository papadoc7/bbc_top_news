import React, { Component } from 'react';
import AppBar from '../src/components/AppBar';

class App extends Component {

    constructor(props) {
        super(props);

        this.updateCountry = this.updateCountry.bind(this)
        this.state = {
            country: 'gb'
        };
    }

    updateCountry(val) {
        this.setState({country: val});
    }


    render() {
        return (
            <>
                <AppBar />
            </>
        );
    }
}

export default App;