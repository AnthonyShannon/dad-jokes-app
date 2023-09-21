import axios from 'axios';

export default {
    // get jokes
    getJokes: () =>
        axios.get('api/jokes/'),
    getUnapprovedJokes: () =>
        axios.get('api/jokes/unapproved/'),
    addJoke: (newJoke: object) =>
        axios.post('api/jokes/', newJoke)
}