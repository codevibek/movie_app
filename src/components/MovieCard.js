import React,{useState,useContext} from 'react'
import ReactCardFlip from 'react-card-flip'
import "../style/MovieCard.css"
// import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'
import  {GlobalContext} from '../context/GlobalState'

 const MovieCard = ({poster,id,rating,overview,title,}) => {
    const [isFlipped,setIsflipped]= useState('false')
    const {removeMovieFromWatchlist,addMovieToWatchlistremoveMovieFromWatched,moveMovieToWatchlist} = useContext(GlobalContext)

    const handleChange=(e)=>{
        e.preventDefault()
        setIsflipped(!isFlipped)
    }
   
    return (
        //  <Link to={`/moviedetail:${id}`}>
        <div className="card">
            

              <ReactCardFlip isFlipped={isFlipped} infinite={true} flipDirection="horizontal" >
              <div className="front" onMouseEnter={handleChange} >
                <img src={poster} alt={title} className="front__image"/>
                <p><strong>{title}</strong></p>
                <div className="front__rating">
                <p>Rating: {rating}</p>
                {/* <ReactStars count={rating} font={20}/> */}
                </div>
                
              </div>
       
              <div className="back" onMouseLeave={handleChange}>
                  <div className="buttonSection">
                      <button className="watchlist">👀</button>
                  </div>
                <h4>Overview</h4>
                <p className="back__overview">{overview}</p>
              </div>
            </ReactCardFlip>
            </div>
        //  </Link>
          
          
    )
}

export default MovieCard