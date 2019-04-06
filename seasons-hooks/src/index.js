import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import useLocation from './useLocation';

const App = () => {
    
    const [latitude, errorMsg] = useLocation();

    const renderContent = () => {
        if (errorMsg && !latitude) {
            return <h2>Error : { errorMsg }</h2>;
        }
        
        if (!errorMsg && latitude) {
            return <SeasonDisplay lat={ latitude } />;
        }
        
        return <Spinner text="Deriving location..." />;
    };
    
    return (
        <div style={{ border: 'solid red 10px' }}>
            { renderContent() }
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));