import React,{useState, useEffect} from 'react'
import {fetchMovieDetail, fetchSimilarMovie,fetchCasts} from '../axios'
import ReactStars from 'react-rating-stars-component'
import {Link } from "react-router-dom"
import   '../style/MovieDetail.css'
import MovieCard from './MovieCard'
export const MovieDetail = ({match}) => {
    console.log(match)
    let params=match.params
    const [detail,setDetail] = useState([])
    const [isOpen,setIsOpen] = useState('false')
    const [casts, setCasts] = useState([])
    const [similarMovie,setSimilarMovie] = useState([])
    const type=""
    useEffect(() => {
        const fetchAPI = async() =>{
            setDetail(await fetchMovieDetail(params.id))
            setCasts(await fetchCasts(params.id))
            setSimilarMovie(await fetchSimilarMovie(params.id))
        }

        fetchAPI()
    }, [])
  
    return (
        <div className="details">
            <div className="details__imageContainer">
            <img onClick={()=>setIsOpen(true)} style={{height:400}} className="maovieDetails__img" src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}/>
            </div>
            <strong>
            {detail.title}
            </strong>
            <div className="details__genre">
            {detail.genres?.map((g,i)=>{
                return(
                    <li keys={i}>
                        {g.name}
                    </li>
                )
            })}
            </div>
           
            <ReactStars classname="details__reactStars" count={detail.vote_average} size={20}/>
            {detail.overview}
            <div className="details__casts">
            {casts?.slice(0,4).map((c,i)=>{
               return( <div className="details__cast">

                <img src={c.img} alt={c.name}/>
                <div className="details__characterDetails">

                {c.character}{c.name}
                </div>
                </div>
               )
            })}
            </div>
            <div className="details__similarMovies">

            </div>
            <div className="details__similarMovies">
                <strong>Similar Movies</strong>
                <div className="details__similarMovie">
            {  similarMovie?.slice(0,4).map((movie,index)=>{
          return(  
           
       
                 <MovieCard key={movie.id} movie={movie} type={type}/>   
                
        )
    })}
    </div>
            </div>
          
        </div>
    )
}
