import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-header py-6 items-center justify-center mx-auto flex gap-4 sticky top-0 z-10">
      <img
        src="/header_logo.png"
        alt="Steam logo for the header of the page"
        className="h-8"
      />
      <Link href="/">Store</Link>
      <Link href="/library">Library</Link>
      <Link href="/community">Community</Link>
      <Link href="/news">News</Link>
      <input type="search" name="" id="" placeholder="Search for games" />
      <Link href="/cart">
        <ShoppingCart />
      </Link>
      <Link href="/profile">
        <User />
      </Link>
      <Link href="/install" className="bg-primary px-4 py-2 rounded-md">
        Install Steam
      </Link>
    </header>
  )
}
