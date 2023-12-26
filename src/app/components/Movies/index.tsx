import { Movie, MovieResult } from "@/app/@types/Movie"
import { MovieCard } from "../MovieCard"

interface MoviesProps {
  movies: MovieResult[]
}

export function Movies({ movies }: MoviesProps) {
  return (
    <main className="grid p-10 grid-cols-5 gap-10 justify-items-center max-xl:grid-cols-4 max-sm:grid-cols-1">
      {
        movies.map((movie: MovieResult, index: number) => (
          <MovieCard
            key={index}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            imageUrl={movie.poster_path} />
        ))
      }
    </main>
  )
}