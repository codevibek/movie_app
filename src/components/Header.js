import React,{useState} from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'

export const Header = () => {
    const [movies,setMovies]= useState([])
    const [query,setQuery] = useState('')
    let history = useHistory();
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        
            
              history.push({
                  pathname:'/SearchResult',
                  search:`?${query}`,
                //   state: {movies: {movies}}
                  
              });
        
        
        // await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setMovies(data)
        //     console.log(movies)
        // })

        //     setQuery('')
    }
     
    return (
        <div className="header">
            <div className="header__search">
            <form onSubmit={handleFormSubmit}>
            <input type="text"  value={query} placeholder="search" onChange={(e)=>setQuery(e.target.value)} />
            </form>
            <FaSearch style={{  color: "rgb(130, 130, 212)"}} onClick={handleFormSubmit}/>
            </div>
           
            <div className="header__nav">
            <ul className="header__navlist">
                <Link className="header__navItem" to="/toprated"><li>Top Rated</li></Link>
                <Link className="header__navItem" to="/upcomming"><li>UpComming</li></Link>
                <Link className="header__navItem" to="/popular"><li>Popular</li></Link>

            </ul>
            <div className="ham-wrapper">

            
<div className="hamburger">

</div>
</div>
            </div>
           
           
        </div>
    )
}
