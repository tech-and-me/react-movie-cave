// const IMG_API = 'https://image.tmdb.org/t/p/w1280/';
// import {useEffect} from 'react';

// const REVIEW_API = "https://imdb-api.com/en/API/MetacriticReviews/k_ypmopwbx/";

const setVoteClass = (vote) => {
    if(vote >=8) {
      return 'green'
    }else if(vote >=6){
      return 'orange'
    }else{
      return 'red'
    }
  }


const Movie = ({image,title,imDbRating,year,fullTitle,crew}) => {

  return (
    <div className="movie">
        <img src={image} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className = {`tag ${setVoteClass(imDbRating)}`}>{imDbRating}</span>
        </div>
        <div className="movie-over">
            <h2>Detail Info: </h2>
            <p>Full Title : {fullTitle}</p>
            <p>Year : {year}</p>
            <p>Crew : {crew}</p>
        </div>
    </div>
    )
}

export default Movie