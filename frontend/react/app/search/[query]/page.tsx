export default async function SearchPage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = await params

  return <div>Search Page query: {query}</div>
}
