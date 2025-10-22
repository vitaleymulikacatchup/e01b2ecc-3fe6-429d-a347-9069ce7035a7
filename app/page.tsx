import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DemoSection from '@/components/DemoSection'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DemoSection />
      <VideoSection />
    </main>
  )
}