export default function About() {
  const skills = [
    { category: "languages", items: ["Java", "Python", "TypeScript"] },
    { category: "frameworks", items: ["React", "AWS", "CDK", "PyTorch"] },
    { category: "tools", items: ["Git", "Linux", "JUnit", "Mockito", "Dagger"] },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs text-terminal-green mb-8 tracking-widest uppercase">
          ## about
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
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
            Outside of work, I’m usually tinkering with side projects, reading about AI reseach papers, 
            or going down rabbit holes on whatever I’m curious about that week.
            </p>
          </div>
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs text-text-muted mb-2">
                  {`> ${group.category}`}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs border border-surface-border px-2 py-1 text-terminal-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
