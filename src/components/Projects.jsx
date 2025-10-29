import './Projects.css';

export default function Projects() {
  const projects = [
    { title: 'Portfolio Website', desc: 'A modern portfolio built with React.', link: '#' },
    { title: 'E-Commerce App', desc: 'A MERN e-commerce store with user login.', link: '#' },
    { title: 'Chat App', desc: 'A real-time chat app using Socket.io.', link: '#' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
