import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

//API key: d6e8c594608b69b399328bb6aaf9ae05
//API request: https://api.themoviedb.org/3/movie/550?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Example search: https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query=avengers

const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query='

const movie1 = {
    'adult' : false,
    'backdrop_path' : "/zQ8AxTPiCiS5nnwXpwTBPBHSaa5.jpg",
    'genre_ids' : [14, 28],
    "id" : 557,
    "original_language" : "en",
    "original_title" : "Spider-Man",
    "overview" : "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
    "popularity": 134.697,
    "poster_path": "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    "release_date": "2002-05-01",
    "title": "Spider-Man",
    "video": false,
    "vote_average": 7.275,
    "vote_count": 17364,
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}${title}`)
        const data = await response.json();

        console.log(data.results);
    }


    useEffect(() => {
        searchMovies('Spiderman')
    }, [])


    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    value="Superman"
                    onChange={()=>{

                    }}
                /> 
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>{
                        
                    }}
                />
            </div>

            <div className='container'>
                <div className='movie'>
                    <p>{movie1.release_date}</p>
                </div>

                <div>
                    <img src={movie1.Poster} alt={movie1.Title}/>
                </div>
            </div>
        </div>
    )
}

export default App;