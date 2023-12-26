import Image from "next/image"
import Link from "next/link"

interface MovieCardProps {
  id: number
  title: string
  overview: string
  imageUrl: string
}

export function MovieCard({ id, title, overview, imageUrl }: MovieCardProps) {
  const addingThreeDotsInTextEnd = (text: string, maxStringLenght: number) => {
    const initialTextPosition = 0
    return text.length >= maxStringLenght ? text.substring(initialTextPosition, maxStringLenght).trimEnd() + '...' : text
  }
  const imgUrl = `https://image.tmdb.org/t/p/original${imageUrl}`
  const spreadOverview = addingThreeDotsInTextEnd(overview, 210)

  return (
    <Link className="flex items-center flex-col group gap-1" href={`/movie/${id}`}>
      <Image
        className="group-hover:brightness-75 delay-100 duration-100"
        src={imgUrl}
        alt={title}
        height={750}
        width={300}
        priority={false}
      />
      <span className="font-semibold text-zinc-100 text-lg">
        {title}
      </span>
      <span className="font-medium text-justify text-sm text-zinc-300 break-words">
        {spreadOverview}
      </span>
    </Link>
  )
}