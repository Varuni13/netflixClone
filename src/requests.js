const API_KEY ="b0d1867018a029a8bfcc00a0d74c1e2f"

const requests={
    fetchTrending: 'https://api.themoviedb.org/3/trending/all/week?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&language=en-US',
    fetchNetflixOriginals: 'https://api.themoviedb.org/3/discover/tv?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_networks=213',
    fetchTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&language=en-US',
    fetchActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_genres=28',
    fetchComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_genres=35',
    fetchHorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_genres=27',
    fetchRomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_genres=10749',
    fetchDocumentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_genres=99',
}

export default requests;