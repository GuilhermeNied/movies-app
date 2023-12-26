import { fetchMovies } from "../actions/fetchMovies";
import { LoadMore } from "../components/LoadMore";
import { Movies } from "../components/Movies";

export default async function Page() {
  const movieCategory = 'now_playing'
  const movies = await fetchMovies(1, movieCategory)

  return (
    <>
      <Movies movies={movies.results} />
      <LoadMore movieCategory={movieCategory} />
    </>
  )
}