import React, { Component } from 'react';
import "isomorphic-fetch";
import Page from './Page';


//const API = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=94410834cf544a44a87cfae8d51cfad1';
const API = 'https://newsapi.org/v2/top-headlines';
const APIKey = '94410834cf544a44a87cfae8d51cfad1'

class App extends Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this)

        this.state = {
            countryNumber: 1, //default is the 1st country
            country: null,
            isLoading: false,
            error: null, //When an error occurs gives to the end-user an indication about the error
            countries: ['gb', 'us', 'fr', 'au', 'in']
        };
    }

    componentDidMount() {
        this.loadCountry();
    }

    /**
     * display new country until you reach the last one
     * @param  prevProps
     * @param  prevState
     */
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.code !== this.props.code) {
            this.loadCountry();
        }
    }

    /**
     * method that is fetching each country's data
     */
    loadCountry() {
        this.setState({ isLoading: true });
        //const articleUrl = API + `article-${this.state.articleNumber}.json`

        const countryUrl = API +  `?country=${this.props.code}&apiKey=${APIKey}`
        console.log("countryUrl", countryUrl)


        fetch(countryUrl)
            //throwing an error when the response doesn’t match the expected data
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                console.log('data', data)
                this.setState({ country: this.state.countries[this.state.countryNumber-1], isLoading: false, countryUrl: countryUrl })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    /**
     * change page according to country
     * @param pageNumber
     */
    changePage(pageNumber) {
        this.setState({ countryNumber: pageNumber});
    }

    render() {
        const { countryNumber, country, isLoading, error, countryUrl } = this.state;

        if (!country) {
            return <p>No data to display yet ...</p>
        }

        //show the error message as conditional rendering again
        if (error) {
          return <p>{error.message}</p>
        }

        //display a loading indicator
        if (isLoading) {
          return <p>Loading ...</p>
        }

        return (
            <>
                <Page country={country} countryUrl={countryUrl} changePage={this.changePage} countryNumber={countryNumber} />
            </>
        );
    }
}

export default App;
