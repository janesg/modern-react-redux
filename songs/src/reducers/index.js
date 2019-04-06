import { combineReducers } from 'redux';

const songsReducer = () => {
    // Use a static list of songs
    return [
        { title: 'Welcome to the jungle', duration: '5:23' },       
        { title: 'Here I go again', duration: '3:34' },       
        { title: "Breakin' the law", duration: '3:45' },       
        { title: 'Back in black', duration: '4:08' },       
        { title: 'Stairway to heaven', duration: '9:12' },       
        { title: "Sweet child o' mine", duration: '6:53' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
