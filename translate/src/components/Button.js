import React from 'react';

import MyExampleContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {
    
    // static property has to be called contextType
    // - static adds property to the class itself
    // - only needed if we are going to access this.context directly
    // static contextType = MyExampleContext;
    
    // Get a handle to the default data in the context object
    // by using this.context
    // render() {
    //     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    //     return <button className="ui button primary">{ text }</button>;
    // }

    // Refactored to use consumers because we want to use multiple contexts
    render() {
        // We are stacking multiple consumers.
        // Each consumer takes a single function as an argument
        //  - use helper functions to improve code layout
        return (
            <ColourContext.Consumer>
                { colour => this.renderButtonColour(colour) }
            </ColourContext.Consumer>
        );
    }
    
    renderButtonColour(colour) {
        return (
            <button className={ `ui button ${ colour }` }>
                <MyExampleContext.Consumer>
                    { ({ language }) => this.renderButtonText(language) }
                </MyExampleContext.Consumer>
            </button>
        );
    }

    renderButtonText = value => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }
}

export default Button;