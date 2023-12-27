import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-5">
      <Link
        className="flex justify-center items-center w-5 h-5 rounded-full p-5 hover:bg-zinc-700 hover:text-purple-600 delay-100 duration-100"
        href='/'
      >
        <span className="text-2xl">{'<'}</span>
      </Link>
    </header>
  )
}