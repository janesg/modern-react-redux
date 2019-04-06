import axios from 'axios';

const KEY = 'AIzaSyAEZdW88_tlSI9JpRC2UXHRhYIRT9-WTnI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
