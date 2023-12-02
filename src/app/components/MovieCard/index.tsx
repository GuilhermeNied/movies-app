import Image from "next/image"
import Link from "next/link"

interface MovieCardProps {
  id: number
}

export function MovieCard({ id }: MovieCardProps) {
  const imgUrl = ''
  return (
    <Link className="flex flex-col group" href={`/movie/${id}`}>
      <Image
        className="group-hover:brightness-90"
        src={imgUrl}
        alt=""
        height={750}
        width={200}
      />
      <span className="font-semibold text-zinc-100 text-lg">
        Movie
      </span>
      <span className="font-medium text-sm text-zinc-00">
        Description
      </span>
    </Link>
  )
}