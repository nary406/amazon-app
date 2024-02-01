import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        style={{width: '100%'}}
      />
      <h1>Action Movies</h1>
      <MovieSlider movieDetails={actionMovies} />
      <h1>Comedy Movies</h1>
    </div>
  )
}

export default PrimeVideo
