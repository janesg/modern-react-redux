import React from 'react';

import { UserCreate } from './UserCreate';
// import TheContext from '../contexts/LanguageContext';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    
    // Component state .... not using Redux
    // state = { language: 'english', colour: 'green' };
    state = { colour: 'green' };
    
    // onLanguageChange = language => {
    //     this.setState({ language });
    // }
    
    // Wrap the child component with a context provider so available 
    // to sub-child components
    // Each time a provider is specified it instantiates a separate 'pipe'
    
    // This version used before refactoring the Language related business
    // logic to the LanguageStore
    // render() {
    //     return (
    //         <div className="ui container">
    //             <div className="ui header">
    //                 <LanguageSelector onLanguageChange={ this.onLanguageChange } />
    //                 <div>
    //                     Select a colour :
    //                     <span>
    //                         <i onClick={ () => this.onColourChange('green') } className="green circle icon" ></i>
    //                         <i onClick={ () => this.onColourChange('red') } className="red circle icon" ></i>
    //                     </span>
    //                 </div>
    //             </div>
    //             <ColourContext.Provider value={ this.state.colour }>
    //                 <TheContext.Provider value={ this.state.language }>
    //                     <UserCreate />
    //                 </TheContext.Provider>
    //             </ColourContext.Provider>
                
    //             {/* Hard-coded to fixed provider value */}
    //             <TheContext.Provider value={ 'dutch' }>
    //                 <UserCreate />
    //             </TheContext.Provider>
                
    //             {/* Hard-coded to context default */}
    //             <UserCreate />
    //             <LanguageStore>
    //         </div>
    //     );
    // }
    
    onColourChange = colour => {
        this.setState({ colour });
    }
    
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <div className="ui header">
                        <LanguageSelector onLanguageChange={ this.onLanguageChange } />
                        <div>
                            Select a colour :
                            <span>
                                <i onClick={ () => this.onColourChange('green') } className="green circle icon" ></i>
                                <i onClick={ () => this.onColourChange('red') } className="red circle icon" ></i>
                            </span>
                        </div>
                    </div>
                    <ColourContext.Provider value={ this.state.colour }>
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageStore>
            </div>
        );
    }
    
}

export default App;