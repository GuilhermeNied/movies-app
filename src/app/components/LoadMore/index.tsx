'use client'

import { fetchMovies } from "@/app/actions/fetchMovies"
import { useCallback, useEffect, useState } from "react"
import { Movies } from "../Movies"

interface LoadMoreProps {
  movieCategory: string
}

export function LoadMore({ movieCategory }: LoadMoreProps) {
  const [movies, setMovies] = useState<any>([])
  const [page, setPage] = useState(2)
  const handleScroll = useCallback(async () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

    if (scrolledToBottom) {
      setPage((prevPage) => prevPage + 1)
      const movies = await fetchMovies(page, movieCategory)

      setMovies((prevMovies: any) => [...prevMovies, ...movies.results])
    }

  }, [movieCategory, page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <Movies movies={movies} />
    </>
  )
}