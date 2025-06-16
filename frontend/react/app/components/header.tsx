"use client"

import Link from "next/link"
import { ArrowDownToLine, Heart, Search, ShoppingCart, X } from "lucide-react"
import Button, { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const usefullLinks = [
  {
    title: "Store",
    href: "/",
  },
  {
    title: "Library",
    href: "/library",
  },
  {
    title: "React",
    href: "https://reactjs.org/",
  },
  {
    title: "Angular",
    href: "https://angular.io/",
  },
  {
    title: "Vue",
    href: "https://vuejs.org/",
  },
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [query, setQuery] = useState<string>("")
  const [recentSearchs, setRecentSearchs] = useState<string[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("recentSearchs")
      if (stored) {
        setRecentSearchs(JSON.parse(stored))
      }
    }
  }, [])

  const formAction = (formData: FormData) => {
    const rawQuery = formData.get("query")

    if (rawQuery) {
      const query = rawQuery.toString().trim()
      if (!query) return

      // Avoid duplicates, most recent first
      let updatedSearches = [query, ...recentSearchs.filter((q) => q !== query)]
      // Limit to last 5 searches
      updatedSearches = updatedSearches.slice(0, 5)

      if (typeof window !== "undefined") {
        localStorage.setItem("recentSearchs", JSON.stringify(updatedSearches))
      }
      setRecentSearchs(updatedSearches)

      router.push(`/search/${query}`)
    }
  }

  const currentPath = `decoration-primary underline-offset-4 underline`
  const defaultPath = `decoration-inherit`

  return (
    <header className="backdrop-filter backdrop-blur-sm bg-header/70 max-w-5xl mx-auto py-4 w-full rounded-lg mt-4 sticky top-4 z-50 font-bold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/header_logo.png"
            alt="Steam logo for the header of the page"
            className="h-8"
          />
          <Link
            href="/"
            className={pathname === "/" ? currentPath : defaultPath}
          >
            Store
          </Link>
          <Link
            href="/library"
            className={pathname === "/library" ? currentPath : defaultPath}
          >
            Library
          </Link>
        </div>
        <div className="flex items-center gap-4 pr-4">
          <Dialog>
            <DialogTrigger className={buttonVariants({ variant: "outline" })}>
              <Search size={18} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search at Steam</DialogTitle>
                <form action={formAction} className="relative mt-4">
                  <input
                    className="border bg-header focus:outline outline-primary border-primary px-4 py-3 text-foreground rounded-lg w-full pr-32"
                    type="text"
                    id="query"
                    name="query"
                    autoComplete="off"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    required
                    placeholder="Search for games"
                  />
                  {query.length > 0 && (
                    <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-2">
                      <Button
                        variant="outline"
                        type="reset"
                        aria-label="Clear"
                        onClick={() => setQuery("")}
                      >
                        <X size={18} />
                      </Button>
                      <Button type="submit" aria-label="Search">
                        <Search size={18} />
                      </Button>
                    </div>
                  )}
                </form>
                {recentSearchs.length > 0 && (
                  <div className="my-4">
                    <h5 className="mb-2">Recent</h5>
                    <ul className="flex flex-col gap-2">
                      {recentSearchs.map((search, index) => (
                        <li
                          key={index}
                          className="text-secondary bg-header p-2 rounded-lg"
                        >
                          <Link
                            href={`/search/${search}`}
                            title={`Search for ${search}`}
                          >
                            {search}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="my-4">
                  <h5 className="mb-2">Usefull links</h5>
                  <ul className="flex flex-col gap-2">
                    {usefullLinks.map((link, index) => (
                      <li
                        key={index}
                        className="text-secondary bg-header p-2 rounded-lg"
                      >
                        <Link href={link.href} title={link.title}>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Link
            href="/whislist"
            className={buttonVariants({ variant: "outline" })}
          >
            <Heart size={18} />
          </Link>
          <Link href="/cart" className={buttonVariants({ variant: "outline" })}>
            <ShoppingCart size={18} />
          </Link>
          <Link
            href="/install"
            className={buttonVariants({ variant: "default" })}
          >
            <ArrowDownToLine size={18} />
          </Link>
        </div>
      </div>
    </header>
  )
}
