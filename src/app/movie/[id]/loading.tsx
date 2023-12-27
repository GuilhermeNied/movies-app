export default function Loading() {
  return (
    <div className="flex animate-pulse w-full flex-col gap-5  py-2 px-48 max-2xl:px-32 max-xl:px-16 max-lg:px-40 max-md:px-5">
      <div className="w-full h-[650px] max-lg:h-[350px] max-md:h-[250px] bg-zinc-700"></div>
      <section className="flex flex-col gap-2">
        <section className="bg-zinc-700 w-full p-4"></section>
        <div className="flex flex-row gap-1 text-md text-zinc-200 max-sm:flex-col">
          <div className="w-2/5 p-2.5 bg-zinc-700">
          </div>
        </div>
        <p className="w-full p-20 bg-zinc-700"></p>
      </section>
      <div className="bg-zinc-700 w-full p-16">
      </div>
    </div>
  )
}