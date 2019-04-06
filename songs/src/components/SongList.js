import React from 'react';

import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends React.Component {
    
    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={ song.title } >
                    <div className="right floated content">
                        <button 
                            className="ui button primary" 
                            onClick={ () => this.props.selectSong(song) }
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        { song.title }
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div className="ui divided list">
                { this.renderList() }
            </div>
        );
    };
};

// Makes specific portion(s) of the Redux state that are of interest
// to this component available as part of props object
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

// Makes specific action creator(s) that are of interest
// to this component available as part of props object.
//
// React Redux then knows that when we call the action creator
// (via props only) it needs to pass the returned action to dispatch
const mapDispatchToProps = {
    selectSong: selectSong
}

// React Redux's connect method returns a 'higher-order' component
// which is then used to wrap a base React component (i.e. SongList).
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SongList);