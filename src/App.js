import React, { Component } from 'react';
import AppBar from '../src/components/AppBar';
import Country from '../src/components/Country';

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
                <AppBar code={this.state.country} updateCountry={this.updateCountry} />
                <Country code={this.state.country} />
            </>
        );
    }
}

export default App;