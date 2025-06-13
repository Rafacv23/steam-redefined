import Link from "next/link"
import { ArrowDownToLine, Heart, ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-header max-w-4xl mx-auto py-4 w-full rounded-full mt-4 sticky top-4 z-50 font-bold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/header_logo.png"
            alt="Steam logo for the header of the page"
            className="h-8"
          />
          <Link href="/">Store</Link>
          <Link href="/library">Library</Link>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for games"
            className="bg-header p-4 rounded-3xl"
          />
        </div>
        <div className="flex items-center gap-4 pr-4">
          <Link href="/cart" className="bg-header rounded-full p-4">
            <Heart size={18} />
          </Link>
          <Link href="/cart" className="bg-header rounded-full p-4">
            <ShoppingCart size={18} />
          </Link>
          <Link
            href="/profile"
            className="bg-header rounded-full p-4 flex items-center gap-2"
          >
            Gabe Newel <User size={18} />
          </Link>
          <Link href="/install" className="bg-primary rounded-full p-4">
            <ArrowDownToLine size={18} />
          </Link>
        </div>
      </div>
    </header>
  )
}
