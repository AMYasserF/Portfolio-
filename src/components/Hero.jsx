import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <p>
          A full-stack developer passionate about creating beautiful, 
          fast, and user-friendly web applications.
        </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
      <img src="/profile.png" alt="Profile" className="hero-img" />
    </section>
  );
}
