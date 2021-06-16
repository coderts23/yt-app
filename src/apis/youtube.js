import axios from 'axios';

const KEY = 'AIzaSyCH97kq9pj01N0IyIM3HyKZD5YJWzXaMlI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
