export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
          You Dream,{' '}
          <span className="text-gradient">
            We Bild
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Generate Websites Instantly, Customize to Perfection.
        </p>
      </div>
    </section>
  )
}