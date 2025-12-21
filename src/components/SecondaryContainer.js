import React from 'react'
import Movielist from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const NowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store.movies.popularMovies);
  const TopRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const UpComingMovies = useSelector((store) => store.movies.upComingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-36 pl-12 relative z-10">
        <Movielist title={"Now Playing"} movies={NowPlayingMovies} />
        <Movielist title={"Top Rated"} movies={TopRatedMovies} />
        <Movielist title={"Upcoming Movies"} movies={UpComingMovies} />
        <Movielist title={"Trending"} movies={PopularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer