// Action creator
// - use a named export
export const selectSong = song => {
    // Must return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
