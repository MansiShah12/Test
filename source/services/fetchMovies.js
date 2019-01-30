import Base from '../utils/base'

export default function callMovies(){
    return fetch(Base.fetchMovies)
}


