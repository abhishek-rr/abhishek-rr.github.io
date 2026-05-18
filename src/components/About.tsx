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
              SDE II at Amazon, focused on building intelligent pricing systems
              and AI agents that streamline operations. I enjoy taking complex,
              legacy systems and turning them into clean, maintainable
              architectures.
            </p>
            <p>
              MS in Computer Science from NYU Courant. Previously built
              full-stack financial systems at Fidelity and recommendation
              engines at Amazon as an intern.
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
