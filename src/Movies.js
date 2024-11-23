import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            setMovies(response.data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Popular Movies</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ margin: '10px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;

