import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    // constructor(props) {
    //     super(props);
        
    //     // Initialise component state
    //     this.state = { lat: null, errorMsg: '' };
    // }
    
    // Abbreviated shorthand for the commented out code above
    state = { lat: null, errorMsg: '' };

    componentDidMount() {
        // !!! WARNING - GeoLocation API does not work on unsecure origins (...default for React Dev Server)
        // - to fix, before starting the server (npm start), type following in C9 console:
        // > export HTTPS="true"
        // N.B.: can remove it using > unset HTTPS
        // Check it is set with:
        // > env | grep HTTPS
        // ...now get an issue running HTTPS on C9:
        //  https://community.c9.io/t/unable-to-do-https-on-c9users-io-request-could-not-be-proxied/11975
        
        // FIXED: simple as making request to https://... instead of http://...
        //  - i.e. use https://modern-react-with-redux-gjanes.c9users.io:8080
        
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return <h2>Error : { this.state.errorMsg }</h2>
        }
        
        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }
        
        return <Spinner text="Deriving location..." />;
    }
    
    render() {
        return (
            <div style={{ border: 'solid red 10px' }}>
                { this.renderContent() }
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));