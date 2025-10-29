import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Fashion Assistant - E-commerce Platform',
      description: 'AI-powered chatbot and recommendation system for mobile application using Flutter and Gemini API.',
      tags: ['Flutter', 'AI', 'Gemini API', 'Mobile'],
      link: 'https://linkedin.com'
    },
    {
      title: 'Smart Manufacturing Predictive Maintenance',
      description: 'ML-based Streamlit app predicting industrial machine maintenance using IoT sensor data.',
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'IoT'],
      link: null
    },
    {
      title: 'Translate and Learn Application',
      description: 'Language learning app with translation, personalized word lists, and quiz generation using Gemini API.',
      tags: ['Flutter', 'Firebase', 'Gemini API'],
      github: 'https://github.com'
    },
    {
      title: 'Electric Demand Forecasting',
      description: 'Hybrid ARIMA-LSTM model improving demand forecasting accuracy by 15%. 4th place in TCCD Competition.',
      tags: ['Python', 'LSTM', 'Time Series', 'ML'],
      github: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected highlights from my portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}