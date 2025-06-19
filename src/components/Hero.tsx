
import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Transform Your
              <span className="text-navy-600 block">Dream Space</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We create exceptional interior designs and architectural solutions that reflect your personality and lifestyle. From concept to completion, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-navy-800 text-navy-800 hover:bg-navy-50 px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-navy-800" />
                </div>
                <div className="text-2xl font-bold text-navy-900">150+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-navy-800" />
                </div>
                <div className="text-2xl font-bold text-navy-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-navy-800" />
                </div>
                <div className="text-2xl font-bold text-navy-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Modern Interior Design"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-navy-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-navy-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
