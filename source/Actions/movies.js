

export function fetchMovies(){
    console.log("in fetchMovies Actionnnnnnn")
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