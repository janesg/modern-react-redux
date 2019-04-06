import React, { Component } from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = { images: [] };

    // Standard way of handling async method that returns a Promise    
    // onSearchSubmitTerm = (term) => {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {
    //             query: term  
    //         },
    //         headers: {
    //             Authorization: 'Client-ID 0d191ccb1a187544895dcfaa225011f60235c1b8b9668cb40de6377a8b2791b1'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results);
    //     });
    // }
    
    // Simplify using ES 2017 async/await syntax
    onSearchSubmitTerm = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term  
            }
        });
        
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={ this.onSearchSubmitTerm } />
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;
