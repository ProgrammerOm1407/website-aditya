
import React from 'react';
import { CheckCircle, Lightbulb, Palette, Ruler } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Designs',
      description: 'Creative solutions that push the boundaries of traditional design'
    },
    {
      icon: Palette,
      title: 'Personalized Approach',
      description: 'Every project is tailored to reflect your unique style and needs'
    },
    {
      icon: Ruler,
      title: 'Precision Planning',
      description: 'Meticulous attention to detail from concept to completion'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
              alt="About Our Studio"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <span className="text-navy-600 font-semibold text-lg">About Us</span>
              <h2 className="text-4xl font-bold text-navy-900 mt-2 mb-6">
                Creating Spaces That Inspire
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over a decade of experience in interior design and architecture, we specialize in creating spaces that seamlessly blend functionality with aesthetic appeal. Our team of expert designers and architects work closely with clients to bring their vision to life.
              </p>
            </div>

            <div className="grid gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-navy-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">15+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
