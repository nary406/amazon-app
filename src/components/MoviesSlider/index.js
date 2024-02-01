// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const movieDetails = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movieDetails?.map(item => (
        <MovieItem eachMovie={item} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
