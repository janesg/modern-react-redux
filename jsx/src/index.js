// Import React & React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getWelcomeText() {
    return { text: 'Welcome ' };
}

const getName = () => {
    return 'Gary ';
}

// Create a React component
const App = () => {
    const exclaim = '!';
    
    return (
        <div style={{ backgroundColor: 'yellow', color: 'red' }}>
            { getWelcomeText().text + getName() + exclaim }
        </div>
    );
};

// Take React component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);