import { fetchMovies } from "./actions/fetchMovies"
import { Movies } from "./components/Movies"

export default async function Home() {
  const movies = await fetchMovies(1, 'popular')

  return (
    <Movies movies={movies.results} />
  )
}
