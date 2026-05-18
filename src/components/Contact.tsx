export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs text-terminal-green mb-8 tracking-widest uppercase">
          ## contact
        </h2>
        <p className="text-sm text-text-muted mb-8 max-w-md">
          Open to interesting conversations about systems design, AI, or
          anything in between. Feel free to reach out.
        </p>
        <div className="space-y-3 text-xs">
          <a
            href="https://github.com/abhishek-rr"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-text-muted hover:text-terminal-green transition-colors"
          >
            &gt; github/abhishek-rr
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-ranjane/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-text-muted hover:text-terminal-green transition-colors"
          >
            &gt; linkedin/abhishek-ranjane
          </a>
          <a
            href="mailto:abhishekranjane33@gmail.com"
            className="block text-text-muted hover:text-terminal-green transition-colors"
          >
            &gt; abhishekranjane33@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
