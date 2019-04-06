import './SeasonDisplay.css';

import React, { Component } from 'react';

class SeasonDisplay extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { 
            lat: this.props.lat
        };
    }
    
    seasonConfig = {
        winter: { text: "Brrr, it's chilly", iconName: 'snowflake' },
        summer: { text: "Let's hit the beach", iconName: 'sun' }
    }
    
    getSeason(lat, month) {
        if (lat >= 0) {
            return month >= 3 && month <= 8 ? 'summer' : 'winter';
        } else {
            return month >= 3 && month <= 8 ? 'winter' : 'summer';
        }
    }
    
    render() {
        const season = this.getSeason(this.state.lat, new Date().getMonth());
        const { text, iconName } = this.seasonConfig[season];

        return (
            <div className={ `season-display ${season}`}>
                <i className={ `${iconName} icon massive icon-left` }></i>
                <h1>{ text }</h1>
                <i className={ `${iconName} icon massive icon-right` }></i>
            </div>
        );
    };
}

export default SeasonDisplay;
