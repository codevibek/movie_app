import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from './MovieCard'
import '../style/Home.css'

export const SearchResult = props => {
    const [movies, setMovies] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const location = useLocation()
    const type=""
    useEffect(()=>{
        console.log(location.search)

        const fetchAPI=async()=>{
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${location.search}&page=${currentPage}`)
            .then(res=>res.json())
            .then(data=>{
                setMovies(data)
                
            })
        }
        fetchAPI()
    },[location])
    const mov = movies['results']?.map(m=>({
        id:m['id'],
        backPoster:`https://image.tmdb.org/t/p/original` + m['backdrop_path'],
        title:m['title'],
        poster:`https://image.tmdb.org/t/p/original` + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }))
    console.log(mov)
    return (
        <div className="container">
            <div className="cardContainer">

           
           {mov?.map((movie)=>{
                             return(
                <MovieCard key={movie.id}  movie={movie} type={type}/>

               )
                    })}
                     </div>
        </div>
    )
    
    }
 
   

