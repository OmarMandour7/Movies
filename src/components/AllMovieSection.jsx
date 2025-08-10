import React, { useEffect, useState } from 'react'
import { getAllMovies, poster } from './api';
import MovieCard from './MovieCard';

const AllMovieSection = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
  getAllMovies(1).then((data) => {
    if (data?.results) setMovies(data.results);
  });
}, []);
console.log(movies)

  return (
   <section className="border-t border-white/5 bg-black justify-center ">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-4 flex items-end justify-between">
      <h2 className="text-white text-xl font-semibold">Popular Movies</h2>
    
    </div>

    <div className="justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
  {movies.map((m) => (
    <MovieCard
      key={m.id}
      id={m.id}
      title={m.title}
      posterPath={poster(m.poster_path)}
      year={m.release_date?.slice(0,4)}
      rating={m.vote_average}
      views={m.popularity} // كبديل سريع لـ views
    />
  ))}
</div>

    </div>
  </div>
</section>

  )
}

export default AllMovieSection