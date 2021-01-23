import {useState,useEffect} from 'react'
import {Home} from './components/Home' 
import {Upcomming} from './components/Upcomming' 
import {Popular} from './components/Popular' 
import {Header} from './components/Header'
import {RightSidebar} from './components/RightSidebar'
import {Footer} from './components/Footer'
import { TopRated } from './components/TopRated'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MovieDetail } from './components/MovieDetail'
import { LeftSidebar } from './components/LeftSidebar'
import { fetchMovies } from './axios'

import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    const fetchAPI=async()=>{
        setMovies(await fetchMovies())
    }
    fetchAPI()
},[])
const handleGenreClick = async(genre_id) =>{
    setMovies(await fetchMovies(genre_id))
    console.log(movies)
}
  return (
  
      <Router>
      <Header/>
      <div className="app__body">
        <div className="left">
          <LeftSidebar handleGenreClick={handleGenreClick}/>
        </div>
        
        <div className="middle">
          <Switch>
          
            <Route  path="/upcomming">
              <Upcomming/>
            </Route>
            <Route  path="/popular">
              <Popular/>
            </Route>
            <Route exact path="/">
              <Home movies={movies}/>
            </Route>
            <Route path="/toprated">
            <TopRated />

            </Route>
            <Route path="/moviedetail/:id" component={MovieDetail}>

            </Route>
          </Switch>
        
        </div>
        <div className="right">
        <RightSidebar/>
        </div>

      </div>
      <Footer/>
      </Router>
      
  );
}

export default App;
