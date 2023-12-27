import Test from "./loading"

async function getMovieCredits(id: number) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  return data.json()
}

async function getMovieDetails(id: number) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  return data.json()
}

async function getMovieTrailer(id: number) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  return data.json()

}

async function getMovie(id: number) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const movieTrailers = await getMovieTrailer(id)
  const movieDetails = await getMovieDetails(id)
  const movieCredits = await getMovieCredits(id)
  const movieTrailer = movieTrailers.results.find((trailer: any) => trailer.type === 'Trailer')

  const movie = {
    movieTrailer,
    movieDetails,
    movieCredits
  }
  return movie
}

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await getMovie(params.id);
  const movieDurationHours = Math.floor(movie.movieDetails.runtime / 60)
  const movieDurationMinutesRemaining = movie.movieDetails.runtime % 60
  const genres = movie.movieDetails.genres
  const addingCommaInTexts = (text: string, index: number) => {
    return (index ? ', ' : '') + text
  }

  return (
    <div className="flex w-full flex-col gap-5 items-center justify-center py-2 px-96 max-2xl:px-32 max-xl:px-16 max-lg:px-40 max-md:px-5">
      <iframe allowFullScreen className="w-full h-[650px] max-lg:h-[400px] max-md:h-[250px]" src={`https://www.youtube.com/embed/${movie.movieTrailer.key}`}></iframe>
      <section className="flex flex-col gap-2">
        <h3 className="font-semibold text-4xl">{movie.movieDetails.title}</h3>
        <div className="flex flex-row gap-1 text-md text-zinc-200 max-sm:flex-col">
          <div>
            {
              genres.map((genre: any, index: number) => (
                <span key={genre.id}>{addingCommaInTexts(genre.name, index)}</span>
              ))
            }
          </div>
          <div>
            <span className="max-sm:hidden">- </span>
            <span>{movieDurationHours}h</span>
            <span>{movieDurationMinutesRemaining}m</span>
          </div>
        </div>
        <p className="text-zinc-300 text-justify">{movie.movieDetails.overview}</p>
      </section>
    </div>
  )
}