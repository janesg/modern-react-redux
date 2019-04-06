import React from 'react';

class SearchBar extends React.Component {
    
    // Store value of input field in component state rather than the DOM
    //  - this is a controlled input rather than uncontrolled
    state = { term: '' };
    
    onSearchChange = event => {
        this.setState({ term: event.target.value });
    };
    
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Video Search : </label>
                        <input 
                            onChange={ this.onSearchChange } 
                            type="text" 
                            value={ this.state.term } />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;