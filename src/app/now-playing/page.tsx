import { fetchMovies } from "../actions/fetchMovies";
import { Movies } from "../components/Movies";

export default async function Page() {
  const movies = await fetchMovies(1, 'now_playing')

  return (
    <Movies movies={movies.results} />
  )
}