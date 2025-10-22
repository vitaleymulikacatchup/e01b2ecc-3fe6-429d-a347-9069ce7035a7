import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
          Webild
        </Link>
        
        <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-200">
          Get Early Access
        </button>
      </div>
    </header>
  )
}