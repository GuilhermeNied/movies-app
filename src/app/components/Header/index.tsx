import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-5">
      <Link href='/'>
        <span className="text-2xl">{'<'}</span>
      </Link>
    </header>
  )
}