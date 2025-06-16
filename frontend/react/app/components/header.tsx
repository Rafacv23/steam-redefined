"use client"

import Link from "next/link"
import { ArrowDownToLine, Heart, Search, ShoppingCart } from "lucide-react"
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

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const formAction = (formData: FormData) => {
    const rawQuery = formData.get("query")

    console.log(rawQuery)
    if (rawQuery) {
      const query = rawQuery.toString()
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
                <form action={formAction} className="flex items-center mt-4">
                  <input
                    className="border bg-header border-primary px-4 py-2 text-foreground rounded-lg"
                    type="text"
                    id="query"
                    name="query"
                    placeholder="Search for games"
                  />
                  <Button variant="outline" type="reset">
                    Clear
                  </Button>
                  <Button type="submit">Search</Button>
                </form>
                <div className="my-4">
                  <h5 className="mb-2">Recent</h5>
                  <ul className="flex flex-col gap-2">
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey Artbook
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey BSO
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey Artbook
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey BSO
                    </li>
                  </ul>
                </div>
                <div className="my-4">
                  <h5 className="mb-2">Usefull links</h5>
                  <ul className="flex flex-col gap-2">
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey Artbook
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey BSO
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey Artbook
                    </li>
                    <li className="text-secondary bg-header p-2 rounded-lg">
                      Super Mario Odyssey BSO
                    </li>
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
