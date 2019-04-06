import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0d191ccb1a187544895dcfaa225011f60235c1b8b9668cb40de6377a8b2791b1'
    }
});
