import React from 'react'
import Banner from '../Banner';
import './HomeScreen.css'
import Nav from '../Nav';
import Row from '../Row';
import requests from '../Requests'; // as we are in the different folder, we need to import it as .. so that we can navigate to different folder

function HomeScreen() {
  return(
    <div className="homeScreen">
    
        <Nav>
        
        </Nav>
        
        {/*Banner*/}
        <Banner/>

            {/*Row*/}
            <Row
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row
            title='Trending Now'
            fetchUrl={requests.fetchTrending}
            
            />
            <Row
            title='Top Rated'
            fetchUrl={requests.fetchTopRated}
            
            />
            <Row
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}
            
            />
            <Row
            title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}
            
            />
            <Row
            title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
            
            />
            <Row
            title='Romance'
            fetchUrl={requests.fetchRomanceMovies}
            
            />
            <Row
            title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
            
            />


     </div>

  );
  
}

export default HomeScreen
