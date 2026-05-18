const experiences = [
  {
    company: "Amazon",
    location: "New York, NY",
    roles: [
      {
        title: "SDE II",
        period: "Dec 2025 - Present",
        bullets: [
          "Developed intelligent pricing and QA AI agents, reducing on-call troubleshooting and accelerating QA cycles from days to hours through automated system analysis and test generation.",
        ],
      },
      {
        title: "SDE I",
        period: "Aug 2023 - Dec 2025",
        bullets: [
          "Led design of a content targeting management platform enabling real-time contextual targeting and brand safety controls across multiple content publishers.",
          "Architected a dynamic, rule-based pricing framework using the Strategy pattern, reducing new fee rollout time from months to weeks.",
          "Modernized a legacy pricing system by reverse-engineering 50+ endpoints and consolidating redundant APIs into a single streamlined interface.",
        ],
      },
    ],
  },
  {
    company: "Fidelity Investments",
    location: "Jersey City, NJ",
    roles: [
      {
        title: "Associate Full Stack Engineer",
        period: "Apr 2023 - Aug 2023",
        bullets: [
          "Contributed to migration of enterprise financial systems from legacy mainframe infrastructure to AWS.",
          "Implemented backend and UI enhancements working closely with product partners to deliver user-facing functionality.",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    location: "New York, NY",
    roles: [
      {
        title: "SDE Intern",
        period: "May 2022 - Aug 2022",
        bullets: [
          "Deployed a recommendation engine serving all guaranteed Amazon DSP customers ($6M revenue impact) to troubleshoot under-delivering campaigns.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs text-terminal-green mb-12 tracking-widest uppercase">
          ## experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l border-surface-border pl-6">
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-sm font-bold text-text-primary">
                  {exp.company}
                </h3>
                <span className="text-xs text-text-muted">{exp.location}</span>
              </div>
              {exp.roles.map((role, j) => (
                <div key={j} className="mb-6 last:mb-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs text-terminal-cyan">
                      {role.title}
                    </span>
                    <span className="text-xs text-text-muted">
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.bullets.map((bullet, k) => (
                      <li
                        key={k}
                        className="text-xs text-text-muted leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-terminal-dim"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
