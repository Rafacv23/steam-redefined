import WhislistedGames from "@/components/whislisted-games"

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "newest", label: "Newest" },
  { value: "price", label: "Price" },
  { value: "discount", label: "Discount" },
  { value: "critics", label: "Critics" },
]

export default function WhislistPage() {
  return (
    <div className="flex flex-col min-h-screen rounded-lg pb-20 sm:py-20 bg-gradient-to-b from-header to-primary/30">
      <main className="flex max-w-5xl flex-col w-full mx-auto items-center sm:items-start">
        <header className="flex justify-between w-full items-center mb-4">
          <h1 className="text-2xl font-bold">Whislist games</h1>
          <nav className="flex gap-4 items-center">
            <input
              type="search"
              name="name"
              id="name"
              placeholder="Search"
              className="border bg-header focus:outline outline-primary border-primary px-4 py-3 text-foreground rounded-lg w-full"
            />
            <select
              name="sort"
              id="sort"
              defaultValue="discount"
              aria-label="Sort by"
              className="border bg-header focus:outline outline-primary border-primary px-4 py-3 text-foreground rounded-lg w-full"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </nav>
        </header>
        <WhislistedGames />
      </main>
    </div>
  )
}
