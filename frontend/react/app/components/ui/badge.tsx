interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return <div className="bg-card rounded-lg px-2 py-1 text-sm">{children}</div>
}
