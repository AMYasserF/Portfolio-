import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Flutter Developer Intern',
      company: 'SlashHub',
      period: 'Oct 2024 – Jan 2025',
      highlights: 'Developed AI-powered e-commerce chatbot features with Flutter, integrated APIs, and managed state with Provider and Bloc.'
    },
    {
      role: 'Flutter Developer Intern',
      company: 'Link Development',
      period: 'July 2025 – Aug 2025',
      highlights: 'Built e-commerce application using Flutter and Riverpod, applied clean architecture principles.'
    },
    {
      role: 'Flutter Developer Intern',
      company: 'Infomatique',
      period: 'July 2025 – Aug 2025',
      highlights: 'Integrated machine learning models into Flutter applications, worked with APIs for ML-based features.'
    },
    {
      role: 'Web Developer Intern',
      company: 'CUFE',
      period: 'July 2024 – Sept 2024',
      highlights: 'Developed React-based dynamic UI components, enhanced performance and cross-browser compatibility.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey in software development
          </p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-sm text-gray-500 font-normal">{exp.period}</span>
                    </div>
                    <p className="text-base font-medium text-indigo-600 mt-1">{exp.company}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{exp.highlights}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}