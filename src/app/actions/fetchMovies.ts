import { Movie } from "../@types/Movie"

export async function fetchMovies(page: number = 1, category: string): Promise<Movie> {
  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&api_key=${process.env.NEXT_PUBLIC_KEY}&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
      }
    })
    return data.json()
  } catch (error) {
    console.log(error);
    return {
      page: 0,
      results: []
    }
  }
}