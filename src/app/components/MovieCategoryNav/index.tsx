'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MovieCategoryNav() {
  const pathname = usePathname()
  const isSamePath = (itemPathname: string): boolean => {
    return pathname === itemPathname
  }
  return (
    <nav className="flex gap-5">
      <Link data-is-active={isSamePath('/')} className="data-[is-active=true]:selected-category-item" href='/'>
        Popular
      </Link>

      <Link data-is-active={isSamePath('/now-playing')} className="data-[is-active=true]:selected-category-item" href='/now-playing'>
        Now playing
      </Link>

      <Link data-is-active={isSamePath('/top-rated')} className="data-[is-active=true]:selected-category-item" href='/top-rated'>
        Top Rated
      </Link>

      <Link data-is-active={isSamePath('/upcoming')} className="data-[is-active=true]:selected-category-item" href='/upcoming'>
        Upcoming
      </Link>

    </nav>
  )
}