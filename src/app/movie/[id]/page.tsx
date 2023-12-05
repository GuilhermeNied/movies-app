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

  return (
    <div className="flex justify-center pt-10">
      <iframe className="w-7/12 h-[41rem]" src={`https://www.youtube.com/embed/${movie.movieTrailer.key}`}></iframe>
      <section>

      </section>
    </div>
  )
}