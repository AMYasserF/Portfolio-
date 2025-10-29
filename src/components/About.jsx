import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  const skills = {
    'Programming': ['Python', 'C++', 'SQL', 'HTML/CSS'],
    'Mobile Development': ['Flutter', 'Firebase', 'State Management'],
    'Data Science': ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    'Tools & Frameworks': ['Git', 'Streamlit', 'Jupyter', 'React']
  };

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions through code and data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Computer Science</h3>
                <p className="text-gray-600">Helwan University</p>
                <p className="text-sm text-gray-500">2021 - 2025 | Grade: Very Good</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Data Science Professional Diploma</h3>
                <p className="text-gray-600">Epsilon AI Institute</p>
                <p className="text-sm text-gray-500">2024 - 2025 | 216 Hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="w-6 h-6 text-indigo-600" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">🏆 4th Place - TCCD Mathematical Research Competition</p>
                <p className="text-sm text-gray-600">Electric Demand Forecasting Project</p>
              </div>
              <div>
                <p className="font-medium">📱 Multiple Flutter Development Internships</p>
                <p className="text-sm text-gray-600">SlashHub, Link Development, Infomatique, Khabeer Group</p>
              </div>
              <div>
                <p className="font-medium">🎓 Certified Data Scientist</p>
                <p className="text-sm text-gray-600">Professional Diploma in ML & Data Science</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-700 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}