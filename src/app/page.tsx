import { MovieCard } from "./components/MovieCard"

export default function Home() {
  let arr: number[] = []

  for (let index = 0; index < 50; index++) {
    arr.push(index)
  }

  return (
    <main className="grid p-10 grid-cols-6 gap-10 justify-items-center max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1">
      {
        arr.map((id, index) => (
          <MovieCard id={id} key={index} />
        ))
      }
    </main>
  )
}
