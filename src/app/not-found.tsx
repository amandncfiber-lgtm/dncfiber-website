import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="font-mono text-blue-600 text-sm tracking-widest uppercase mb-4">404 — Page Not Found</div>
        <h1 className="font-display font-700 text-6xl lg:text-8xl text-white mb-6">
          Not<br />Found
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
