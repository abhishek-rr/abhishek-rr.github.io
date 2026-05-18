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
        <p className="text-lg text-text-muted max-w-xl mb-8">
          Software Development Engineer building scalable systems, AI agents,
          and pricing infrastructure at Amazon.
        </p>
        <div className="flex gap-4 text-xs">
          <a
            href="#experience"
            className="border border-terminal-green text-terminal-green px-4 py-2 hover:bg-terminal-green/10 transition-colors"
          >
            view experience
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
