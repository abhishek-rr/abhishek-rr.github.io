export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <p className="text-terminal-dim text-xs mb-2 tracking-widest uppercase">
          &gt; init profile
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Abhishek Ranjane
        </h1>
        <div className="space-y-4 text-sm text-text-muted leading-relaxed max-w-xl mb-8">
          <p>
            My name is Abhishek. I write software for a living and for fun.
          </p>
          <p>
            These days I work as an engineer at Amazon,
            where I spend a lot of time thinking about distributed systems,
            developer tooling, and making old systems a little less painful to work with.
          </p>
          <p>
            Before that, I studied computer science at NYU Courant, and built financial systems at Fidelity.
          </p>
          <p>
            I enjoy turning messy, complicated codebases into something people can actually understand and maintain.
            Outside of work, I'm usually tinkering with side projects, reading about AI reseach papers,
            or going down rabbit holes on whatever I'm curious about that week.
          </p>
        </div>
        <div className="flex gap-4 text-xs">
          <a
            href="#experience"
            className="border border-terminal-green text-terminal-green px-4 py-2 hover:bg-terminal-green/10 transition-colors"
          >
            my work
          </a>
          <a
            href="#contact"
            className="border border-surface-border text-text-muted px-4 py-2 hover:border-terminal-green hover:text-terminal-green transition-colors"
          >
            get in touch
          </a>
        </div>
        <div className="mt-16 text-text-muted text-xs opacity-50">
          <span className="inline-block animate-[blink_1s_steps(1)_infinite]">_</span>
        </div>
      </div>
    </section>
  );
}
