import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    
    static contextType = LanguageContext;
    
    render() {
        const onLanguageChange = this.context['onLanguageChange'];
        
        return (
            <div>
                Select a language :
                <i className="flag uk" 
                   onClick={ () => onLanguageChange('english') } ></i>
                <i className="flag nl" 
                   onClick={ () => onLanguageChange('dutch') } ></i>
            </div>
        );
    }    
}

export default LanguageSelector;
