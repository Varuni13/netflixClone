import axios from "axios";

/** base url to make requests to the movie database*/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=b0d1867018a029a8bfcc00a0d74c1e2f",
});

const res = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&language=en-US');
console.log(res)

instance.get('/foo-bar');

export default instance;