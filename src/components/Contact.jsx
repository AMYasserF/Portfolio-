import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p>Feel free to reach out for collaborations or just to say hi 👋</p>
      <div className="icons">
        <a href="https://github.com/yourusername"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope /></a>
      </div>
      <p className="footer">© {new Date().getFullYear()} Your Name</p>
    </section>
  );
}
