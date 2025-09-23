import React from 'react';
import { Code, Globe, Smartphone, Settings, Wifi, Shield, Database, Cloud, BarChart, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Software Solutions',
      description: 'Custom software development tailored to your business needs',
      icon: Code,
      color: 'text-primary',
      services: [
        {
          name: 'Web Development',
          description: 'Modern, responsive websites and web applications',
          icon: Globe
        },
        {
          name: 'Custom Software',
          description: 'Tailored solutions for your specific requirements',
          icon: Settings
        },
        {
          name: 'Mobile Apps',
          description: 'User-friendly mobile applications for iOS and Android',
          icon: Smartphone
        },
        {
          name: 'IT Consultancy',
          description: 'Expert guidance on technology decisions',
          icon: BarChart
        }
      ]
    },
    {
      title: 'Network Solutions',
      description: 'Secure and reliable network infrastructure for your organization',
      icon: Wifi,
      color: 'text-accent',
      services: [
        {
          name: 'Home Networking',
          description: 'Wi-Fi and LAN setups for residential properties',
          icon: Wifi
        },
        {
          name: 'Business Networking',
          description: 'Scalable network solutions for organizations',
          icon: Settings
        },
        {
          name: 'Network Security',
          description: 'Protect your network from threats and vulnerabilities',
          icon: Shield
        }
      ]
    },
    {
      title: 'Database Management',
      description: 'Efficient data storage, management, and analytics solutions',
      icon: Database,
      color: 'text-primary',
      services: [
        {
          name: 'Database Design',
          description: 'Optimized database architecture and setup',
          icon: Database
        },
        {
          name: 'Backup & Recovery',
          description: 'Secure data backup and disaster recovery solutions',
          icon: HardDrive
        },
        {
          name: 'Cloud Solutions',
          description: 'Cloud migration and management services',
          icon: Cloud
        },
        {
          name: 'Data Analytics',
          description: 'Transform data into actionable business insights',
          icon: BarChart
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business grow and succeed in the digital landscape.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="bg-card border border-border rounded-full p-4">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{category.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6 card-hover group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-secondary rounded-full p-3 mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                        <service.icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

