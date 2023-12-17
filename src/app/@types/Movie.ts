export type MovieResult = {
  id: number
  poster_path:string
  title: string
  overview: string
}

export type Movie = {
  page: number
  results: MovieResult[]
}