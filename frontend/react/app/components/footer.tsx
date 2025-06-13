import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  About Steam
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Steam Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Store</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Discovery Queue
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Discussions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Workshop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Market
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Steam Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/header_logo.png"
              alt="Steam logo"
              className="h-8"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-zinc-500">
            © 2025 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
