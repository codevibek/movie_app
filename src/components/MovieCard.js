import React,{useState,useEffect} from 'react'
import ReactCardFlip from 'react-card-flip'
import "../style/MovieCard.css"
import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'

 const MovieCard = ({movie,type}) => {
    const [isFlipped,setIsflipped]= useState('false')
  const [watchlist, setWatchlist] = useState([])
  const [exist,setExist] = useState(false)
  const {poster,id,rating,overview,title}= movie

  useEffect(() => {
    // localStorage.setItem('watchlist', JSON.stringify(watchlist))

  }, [watchlist])

    const handleChange=(e)=>{
        e.preventDefault()
        setIsflipped(!isFlipped)
    }
    const addMovieToWatchlist=(movie)=>{

      let oldWatchList = JSON.parse(localStorage.getItem('watchlist'))
      let isPresent = oldWatchList.find(mov=>mov.id===movie.id)
      let notPresent = !isPresent
      setExist(notPresent)
      notPresent &&(
        oldWatchList.push(movie)

      )
    localStorage.setItem('watchlist', JSON.stringify(oldWatchList))
      
    }
    const removeMovie = (id) => {
      let oldWatchList = JSON.parse(localStorage.getItem('watchlist'))
      let afterDeletionWatchList = oldWatchList.filter(mov=> mov.id!==id )

      localStorage.setItem('watchlist', JSON.stringify(afterDeletionWatchList))

    }
   
    return (
        <div className="card">
            

              <ReactCardFlip isFlipped={isFlipped} infinite={true} flipDirection="horizontal" >
              <div className="front" onMouseEnter={handleChange} >
                <img src={poster} alt={title} className="front__image"/>
                
                
              </div>
       
              <div className="back" onMouseLeave={handleChange}>
                  
                      <div className="title">

                      <p><i><b>{title}</b></i></p>
                      </div>
                      <div className="buttonSection">
                 {type!=="watchlist" &&(
                         <div   onClick={()=>addMovieToWatchlist(movie)} className="watchlist">
                           👀
                           <div className="watchlistText">Add to watchlist</div>
                           </div>

                 )
                 }
                  {type==="watchlist" &&(
                         <button  onClick={()=>removeMovie(id)} className="watchlist">❌</button>

                 )
                 }

                      <Link to={`/moviedetail/${id}`} className="details"    >Details</Link>
                      </div>
                      <div className="overviewContainer">
                        <div><strong>Overview</strong></div>
                        <div className="overview">{overview}</div>
                      </div>
                <div className="back__rating">
                <p>Rating: <span>{rating}</span></p>
                <ReactStars count={10} edit={false} isHalf={true} value={rating} font={20}/>
                </div>
                 
                  
              </div>
            </ReactCardFlip>
            </div>
          
          
    )
}

export default MovieCard