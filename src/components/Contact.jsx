import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yarafarouk960@gmail.com',
      link: 'mailto:yarafarouk960@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 112 997 9280',
      link: 'tel:+201129979280'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/yaraahmed'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/yaraahmed'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <info.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-700">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t">
              <p className="text-center text-gray-700 font-semibold mb-4">Connect with me</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button key={index} asChild variant="outline" size="lg" className="gap-2">
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-gray-600">
          <p>© 2025 Yara Ahmed. Built with React, TypeScript, and Shadcn UI.</p>
        </div>
      </div>
    </section>
  );
}