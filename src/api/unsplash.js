import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Cp9DGmCU-Z3q4VhINcK0FTuEesjAmhmiWzCu-PONCTQ'
    }
});