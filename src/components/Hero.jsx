import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Yara Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Flutter Developer & Data Scientist
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Cairo, Egypt</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Computer Science graduate specializing in mobile development and machine learning. 
          Passionate about building intelligent applications that solve real-world problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:yarafarouk960@gmail.com">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 !bg-transparent hover:!bg-gray-100">
            <a href="https://github.com/yaraahmed" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 !bg-transparent hover:!bg-gray-100">
            <a href="https://linkedin.com/in/yaraahmed" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}