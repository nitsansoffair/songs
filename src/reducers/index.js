import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '5:05'
        },
        {
            title: 'Macarena',
            duration: '4:04'
        },
        {
            title: 'All Star',
            duration: '3:50'
        },
        {
            title: 'Backstreet boys',
            duration: '1:45'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});