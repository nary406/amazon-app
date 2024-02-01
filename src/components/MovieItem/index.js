const MovieItem = props => {
  const {eachMovie} = props
  console.log(eachMovie)

  return (
    <div>
      <h1>{eachMovie.id}</h1>
    </div>
  )
}

export default MovieItem
