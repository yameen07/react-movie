const imgapi='https://image.tmdb.org/t/p/w500/'

function Movie({title,poster_path,vote_average}) {
    return (
        <div className='moviep'>
            <img src={imgapi + poster_path} alt={title}/>
            <div className='info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default Movie
