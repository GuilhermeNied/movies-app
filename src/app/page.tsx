import { Metadata } from "next"
import { fetchMovies } from "./actions/fetchMovies"
import { LoadMore } from "./components/LoadMore"
import { Movies } from "./components/Movies"

export const metadata: Metadata = {
  title: 'Movies app - Popular'
}

export default async function Home() {
  const movieCategory = 'popular'
  const movies = await fetchMovies(1, movieCategory)

  return (
    <>
      <Movies movies={movies.results} />
      <LoadMore movieCategory={movieCategory} />
    </>
  )
}
