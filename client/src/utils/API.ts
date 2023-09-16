import axios from 'axios';

export default {
    // get jokes
    getJokes: () => 
        axios.get('api/jokes/'),
    addJoke: (newJoke: object) => 
        axios.post('api/jokes/', newJoke)
}