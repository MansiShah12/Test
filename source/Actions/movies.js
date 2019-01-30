

export function fetchMovies(){
  return({
      type : 'FETCH_MOVIES'
  })
}

export  function fetchMoviesSuccess(movies){
  return({
      type : 'FETCH_MOVIES_SUCCESS',
      payload : movies
  })
}