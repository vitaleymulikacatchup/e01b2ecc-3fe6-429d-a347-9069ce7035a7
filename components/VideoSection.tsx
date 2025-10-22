'use client'

import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto flex justify-center">
        <button className="flex items-center gap-3 px-6 py-3 bg-black/80 hover:bg-black text-white rounded-full font-medium transition-colors duration-200 group">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
          </div>
          Watch Showreel
        </button>
      </div>
    </section>
  )
}