import { Movie } from "./@types/Movie"
import { MovieCard } from "./components/MovieCard"

async function getMovies(page: number = 1): Promise<Movie> {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  return data.json()
}

export default async function Home() {
  const movies = await getMovies()

  return (
    <main className="grid p-10 grid-cols-6 gap-10 justify-items-center max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1">
      {
        movies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            imageUrl={movie.poster_path} />
        ))
      }
    </main>
  )
}
