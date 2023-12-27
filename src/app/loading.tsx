export default function Loading() {
  const numberOfCards = 15

  return (
    <div className="grid p-10 grid-cols-5 gap-10 justify-items-center max-xl:grid-cols-4 max-sm:grid-cols-1">
      {
        new Array(numberOfCards).fill(1).map((value, index) => (
          <div key={index} className="flex bg-zinc-700 h-96 w-72 items-center flex-col group gap-1 max-xl:w-52 max-lg:w-48">
          </div>
        ))
      }
    </div>
  )
}