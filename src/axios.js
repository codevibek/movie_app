import axios from 'axios'

const apikey=`${process.env.REACT_APP_TMDB_KEY}`
const url="https://api.themoviedb.org/3"
const topRatedUrl=`${url}/movie/top_rated`
const popularUrl=`${url}/movie/popular`
const upCommingUrl=`${url}/movie/upcomming`
const latestUrl=`${url}/movie/latest`
const videoUrl=`${url}/movie`
const similarMovieUrl=`${url}/movie`
const genreListUrl=`${url}/genre/movie/list`
const genreUrl=`${url}/discover/movie`
const searchUrl=`${url}/search/movie`
const personUrl=`${url}/person`
const imageUrl = `https://image.tmdb.org/t/p/original`
const currentPage=1

export const fetchMovies=async(genre_id) =>{
    try{
        const {data} =await axios.get(genreUrl,{
            params:{
                api_key:apikey,
                language:"en_US",
                page:currentPage,
                with_genres:genre_id,
                sort_by:"popularity.desc"
            }
        })
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
            backposter: imageUrl + m['backdrop_path'],
            title: m['title'],
            rating: m['vote_average'],
            overview:m['overview'],
            poster:imageUrl + m['poster_path']
        }))
        return modifiedData
    }catch(error){}
    
}

export const fetchTopRatedMovies=async()=>{
    try{
    const {data} = await axios.get(topRatedUrl,{
        params: {
            api_key:apikey,
            language: "en_US",
            page:currentPage
        }
    })
    const modifiedData = data["results"].map((m)=>({
        id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }
    
))
    return modifiedData
}catch(error){}
}

export const fetchPopularMovies= async()=>{
    try{
        const {data} = await axios.get(popularUrl,{
            params: {
                api_key:apikey,
                language:"en_US",
                page: currentPage
            }
        })
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
            backPoster:imageUrl + m['backdrop_path'],
            popularity:m['popularity'],
            title:m['title'],
            poster:imageUrl + m['poster_path'],
            overview:m['overview'],
            rating:m['vote_average']
        }))
       
    }catch(error){}
}

export const fetchUpCommingMovies=async()=>{
    try{
    const {data} = await axios.get(upCommingUrl,{
        params: {
            api_key:apikey,
            language: "en_US",
            page:currentPage
        }
    })
    const modifiedData = data["results"].map((m)=>({
        id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }
    
))
    return modifiedData
}catch(error){}
}
export const fetchLatestMovies=async()=>{
    try{
    const {data} = await axios.get(latestUrl,{
        params: {
            api_key:apikey,
            language: "en_US",
            page:currentPage
        }
    })
    const modifiedData = data["results"].map((m)=>({
        id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }
    
))
    return modifiedData
}catch(error){}
}

export const fetchSimilarMovies=async()=>{
    try{
        const {data} = await axios.get(similarMovieUrl,{
            params:{
                api_key: apikey,
                language:"en_US",
                page:currentPage
            }
        })
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
        }))
        return modifiedData
    }catch(error){}
}

export const fetchGenreList = async() => {
    try{
        const {data} = await axios.get(genreListUrl,{
            params:{
                api_key:apikey,
                language:"en_US"
            }
        })
        const modifiedData = data['genres'].map(g=>({
            id:g['id'],
            name:g['name']
        }))
        return modifiedData
    }catch(error){}
}