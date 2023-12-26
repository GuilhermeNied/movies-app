'use client'

import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { MovieCategoryNav } from "./components/MovieCategoryNav"
import { Header } from "./components/Header"

interface LayoutProviderProps {
  children: ReactNode
  className?: string
}

export function LayoutProvider({ children, className }: LayoutProviderProps) {
  const pathname = usePathname()
  const isPathnameIncludesMovie = pathname.includes('/movie')
  return (
    <>
      {
        isPathnameIncludesMovie && <Header />
      }
      {
        !isPathnameIncludesMovie && <MovieCategoryNav />
      }
      {children}
    </>
  )
}