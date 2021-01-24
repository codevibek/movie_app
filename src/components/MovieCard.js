import React,{useState,useEffect} from 'react'
import ReactCardFlip from 'react-card-flip'
import "../style/MovieCard.css"
import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'

 const MovieCard = ({movie,type}) => {
    const [isFlipped,setIsflipped]= useState('false')
  const [watchlist, setWatchlist] = useState([])
  const {poster,id,rating,overview,title}= movie
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

    const handleChange=(e)=>{
        e.preventDefault()
        setIsflipped(!isFlipped)
    }
    const addMovieToWatchlist=(movie)=>{
      
      setWatchlist(watchlist.concat(movie) )
      
    }
   
    return (
        <div className="card">
            

              <ReactCardFlip isFlipped={isFlipped} infinite={true} flipDirection="horizontal" >
              <div className="front" onMouseEnter={handleChange} >
                <img src={poster} alt={title} className="front__image"/>
                
                
              </div>
       
              <div className="back" onMouseLeave={handleChange}>
                  <div className="buttonSection">
                 
                    <button  onClick={()=>addMovieToWatchlist(movie)} className="watchlist">👀</button>

                      <Link to={`/moviedetail/${id}`} className="details"    >Details</Link>
                      </div>
                      <div className="title">

                      <p><i><b>{title}</b></i></p>
                      </div>
                <div className="front__rating">
                <p>Rating: {rating}</p>
                <ReactStars count={rating} font={20}/>
                </div>
                 
                  
                <h4>Overview</h4>
                <p className="back__overview">{overview}</p>
              </div>
            </ReactCardFlip>
            </div>
          
          
    )
}

export default MovieCard