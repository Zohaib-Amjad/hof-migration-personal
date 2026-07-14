import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center gap-6 px-4 py-4">
        <Link className="font-semibold" href="/">
          HOF Migration
        </Link>
        <ul className="flex flex-wrap gap-4 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
