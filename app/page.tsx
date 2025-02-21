import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="JEM Media Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-xl">JEM Media</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://status.jemedia.xyz"
                className="hover:underline"
              >
                Service Status
              </Link>
              <Link
                href="https://verifiedhandles.org"
                className="hover:underline"
              >
                Verified Handles
              </Link>
              <Link href="https://j-h.ai" className="hover:underline">
                James Haworth
              </Link>
            </div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row items-center max-w-4xl w-full space-y-8 md:space-y-0 md:space-x-8">
          <Image
            src="/logo.svg"
            alt="JEM Media Logo"
            width={150}
            height={150}
            className="w-32 h-32 md:w-64 md:h-64 opacity-60"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">JEM Media</h1>
            <p className="text-xl mb-6">
              A British services provider that manages internet properties
              internationally for a range of clients.
            </p>
            <Link
              href="mailto:james@jemedia.xyz"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full text-lg font-semibold transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
