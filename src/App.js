import {useState,useEffect} from 'react';
import './App.css';
import Movie from './components/Movie';
import Footer from './components/Footer';

const API_KEY = "k_z17rz1nb"

const FEATURED_API = "https://imdb-api.com/en/API/MostPopularMovies/" + API_KEY;

const SEARCH_API = "https://imdb-api.com/en/API/SearchMovie/" + API_KEY + "/";

let allMovieList=[];

function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect (()=> { (async () =>{
    const moviesResp = await fetch(FEATURED_API);
    const moviesJson = await moviesResp.json();
    allMovieList =  await moviesJson.items;
    console.log(allMovieList);
    setMovies(allMovieList);
  })();

  },[]);

  const handleOnSubmit = async (event) => {
      event.preventDefault();

      if(searchTerm){
        const searchMovieResp = await fetch(SEARCH_API + searchTerm);
        const searchMovieRespJson = await searchMovieResp.json();
        const searchMovieList = await searchMovieRespJson.results;
        console.log("search result is : ", searchMovieList);    
        setMovies(searchMovieList);
        
      };
  };

  const handleOnChange = (event) => {
      setSearchTerm(event.target.value);
  }

  const clearSearchField = (event) => {
      event.preventDefault();
      setSearchTerm('');
      setMovies(allMovieList);
  }

  return(
    <div>
        <header>
          <h1>Movie Cave<span><br/>By Phary Phal</span></h1>
          <form onSubmit={handleOnSubmit} action="">
            <input className = "search" type="search" placeholder="Search..." 
            value={searchTerm} onChange={handleOnChange} onClick={clearSearchField}
             />
          </form>
        </header>
        <div className="movie-container">      
            {movies && movies.map((movie) => 
              <Movie key={movie.id} {...movie}/>) 
            } 
        </div>
        <Footer />
    </div>
  );
}

export default App;
