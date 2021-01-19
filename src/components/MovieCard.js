import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import "../style/MovieCard.css"
// import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'

 const MovieCard = ({poster,id,rating,overview,title,}) => {
    const [isFlipped,setIsflipped]= useState('false')
    
    const handleMouseEnter=(e)=>{
        e.preventDefault()
        setIsflipped(!isFlipped)
    }
    const handleMouseLeave=(e)=>{
        e.preventDefault()
        setIsflipped(!isFlipped)

    }
    return (
        //  <Link to={`/moviedetail:${id}`}>
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className="card">
              <div className="front" onMouseEnter={handleMouseEnter} >
                <img src={poster} alt={title} className="front__image"/>
                <p><strong>{title}</strong></p>
                <div className="front__rating">
                <p>Rating: {rating}</p>
                {/* <ReactStars count={rating} font={20}/> */}
                </div>
                
              </div>
       
              <div className="back" onMouseLeave={handleMouseLeave}>
                  <div className="buttonSection">
                      <button className="watchlist">👀</button>
                  </div>
                <h4>Overview</h4>
                <p className="back__overview">{overview}</p>
              </div>
            </ReactCardFlip>
        //  </Link>
          
          
    )
}

export default MovieCard