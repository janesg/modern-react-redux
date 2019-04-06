import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export class Field extends Component {

    static contextType = LanguageContext;

    render() {
        // Can use either to access the language property in context object
        const label = this.context.language === 'english' ? 'Name' : 'Naam';
        // const label = this.context['language'] === 'english' ? 'Name' : 'Naam';
        
        return (
            <div className="ui field">
                <label>{ label }</label>
                <input />
            </div>
        );
    }
}