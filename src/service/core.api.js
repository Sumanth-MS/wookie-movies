import axios from 'axios';

class Network {
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://wookie.codesubmit.io',
            headers: {'Authorization': 'Bearer Wookie2019'}
          });
    }

    getAllMovies(){
        return this.instance.get(`/movies`)
    }

    searchMovie(q){
        return this.instance.get(`/movies?q=${q}`)
    }

}

const singleton = new Network();
export default singleton;