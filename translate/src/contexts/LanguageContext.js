import React from 'react';

// Create a context with a default value
// Any component we create must start with a capital letter
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    
    state = { language: 'english' };
    
    onLanguageChange = language => {
        this.setState( { language } );
    }
    
    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }} >
                { this.props.children }
            </Context.Provider>
        );
    }
}

export default Context;