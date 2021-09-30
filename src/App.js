import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Title from './Title';


function App() {
  return (
    <div className="app">
    <Title />
   
    <Row 
      title= "NETFLIX ORIGINLS" fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=b0d1867018a029a8bfcc00a0d74c1e2f&with_networks=213"}
      isLargeRow 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending }/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Now" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     </div>
  );
}

export default App;
