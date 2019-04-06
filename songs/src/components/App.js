import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid" style={{ paddingTop: '20px' }}>
            <div className="ui row">
                {/* Note: Semantic UI grid is 16 columns wide */}
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;