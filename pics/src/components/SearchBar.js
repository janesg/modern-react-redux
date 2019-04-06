import React, { Component } from 'react';

class SearchBar extends Component {
    
    state = { term: '' };
    
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    
    // onFormSubmit(event) {
    //     event.preventDefault();
        
    //     console.log(this.state.term);
    // }

    // Use arrow function to avoid binding 'this'    
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSearchSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit } >
                    <div className="field">
                        <label>Image Search</label>
                        {/* Controlled - input updates state, re-renders and updates the value */}
                        <input 
                            type="text" 
                            value={ this.state.term } 
                            onChange={ e => this.setState({ term: e.target.value }) } />
                        {/* Uncontrolled - to access current value we have to access the DOM
                            <input type="text" onChange={ this.onInputChange } /> 
                        */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;