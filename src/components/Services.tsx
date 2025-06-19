
import React from 'react';
import { Home, Building2, Paintbrush, Sofa, Lamp, TreePine } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home interior design solutions for apartments, villas, and independent houses.',
      features: ['Space Planning', 'Furniture Selection', 'Color Schemes', 'Lighting Design']
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Professional office spaces, retail stores, restaurants, and hospitality interiors.',
      features: ['Office Layouts', 'Brand Integration', 'Functional Spaces', 'Modern Aesthetics']
    },
    {
      icon: Paintbrush,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      features: ['Space Optimization', 'Modern Updates', 'Structural Changes', 'Style Transformation']
    },
    {
      icon: Sofa,
      title: 'Furniture Design',
      description: 'Custom furniture design and selection to perfectly complement your space.',
      features: ['Custom Pieces', 'Material Selection', 'Ergonomic Design', 'Quality Craftsmanship']
    },
    {
      icon: Lamp,
      title: 'Lighting Solutions',
      description: 'Comprehensive lighting design to enhance ambiance and functionality.',
      features: ['Ambient Lighting', 'Task Lighting', 'Decorative Elements', 'Smart Controls']
    },
    {
      icon: TreePine,
      title: 'Landscape Design',
      description: 'Beautiful outdoor spaces including gardens, terraces, and balcony designs.',
      features: ['Garden Planning', 'Plant Selection', 'Outdoor Furniture', 'Water Features']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-navy-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl font-bold text-navy-900 mt-2 mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer a full range of interior design and architectural services to meet all your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-navy-100 rounded-xl mb-6 group-hover:bg-navy-600 transition-colors">
                  <service.icon className="w-8 h-8 text-navy-800 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
