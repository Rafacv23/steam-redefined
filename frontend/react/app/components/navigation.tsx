import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-primary py-4 mx-auto items-center justify-center flex gap-4 font-bold">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
