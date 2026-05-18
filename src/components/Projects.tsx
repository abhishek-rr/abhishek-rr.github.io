const projects = [
  {
    title: "Semantic Image Inpainting",
    tech: "PyTorch, HPC",
    description:
      "Implemented GANs using contextual encoders on the STL-10 Dataset with hyperparameter search for novel insights. Programmed masked auto-encoders as a generator.",
    link: "https://github.com/abhishek-rr/CV-Image-inpaining",
  },
  {
    title: "A.I Based Yoga Guru",
    tech: "Posenet, OpenCV, Kotlin",
    description:
      "Android application using pose estimation and correction to improve exercises performed by users, with voice control navigation.",
    link: null,
  },
  {
    title: "Food Recommendation Engine",
    tech: "React, Firebase, SPARQL",
    description:
      "Recipe recommendation app using mixed integer programming and the FoodOn RDF ontology for ingredient association logic.",
    link: "https://grubmaster.net/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs text-terminal-green mb-12 tracking-widest uppercase">
          ## projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-surface-border p-6 hover:border-terminal-green/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-terminal-green transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-terminal-green transition-colors"
                  >
                    [link]
                  </a>
                )}
              </div>
              <p className="text-xs text-terminal-cyan mb-3">{project.tech}</p>
              <p className="text-xs text-text-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
