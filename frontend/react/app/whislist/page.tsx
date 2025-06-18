import { DetailedGameCard } from "@/components/game-card"

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "newest", label: "Newest" },
  { value: "price", label: "Price" },
  { value: "discount", label: "Discount" },
  { value: "critics", label: "Critics" },
]

const templateGames = [
  {
    id: 1,
    name: "Elden Ring",
    cover:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F775869-elden-ring-xbox-one-front-cover.jpg&f=1&nofb=1&ipt=e5253ca9fa2dfc236b87d18f649942244f5040020b7cf31775bcb251a35a94f9",
    poster:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546",
    trailer: "E3Huy2cdih0",
    discount: 30,
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    important: true,
    released: "2022-02-25",
    tags: ["Open World", "Souls-like", "Fantasy"],
    features: ["Single-player", "Controller Support", "Steam Achievements"],
    languages: ["English", "Japanese", "French", "German"],
    dlcs: [
      {
        name: "Shadow of the Erdtree",
      },
      {
        name: "Elden Ring Complete Edition",
        content: ["Elden Ring", "Shadow of the Erdtree"],
      },
    ],
    rating: 95,
    total_reviews: 250000,
    steam_deck: "Verified",
    system_requiremens: [
      {
        name: "OS",
        value: "Windows 10 or higher.",
      },
      {
        name: "CPU",
        value: "Intel i7-8700K or higher.",
      },
      {
        name: "RAM",
        value: "16 GB RAM.",
      },
      {
        name: "GPU",
        value: "NVIDIA GTX 1070.",
      },
      {
        name: "Storage",
        value: "60 GB storage.",
      },
    ],
    reviews: [
      {
        author: "Knightmare",
        date: "2022-03-01",
        rating: 10,
        hours: 120,
        comment: "Masterpiece. GOTY easily.",
      },
      {
        author: "BladeDancer",
        date: "2022-04-15",
        rating: 9,
        hours: 80,
        comment: "Amazing combat and world design.",
      },
    ],
    links: [
      {
        name: "Steam",
        url: "https://store.steampowered.com/app/1245620/Elden_Ring/",
      },
      {
        name: "Official Site",
        url: "https://en.bandainamcoent.eu/elden-ring/elden-ring",
      },
    ],
    description:
      "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
    about:
      "Elden Ring is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R.R. Martin.",
    price: 59.99,
  },
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
        <ul className="flex flex-col gap-4 w-full">
          {templateGames.map((game) => (
            <DetailedGameCard key={game.id} game={game} />
          ))}
        </ul>
      </main>
    </div>
  )
}
