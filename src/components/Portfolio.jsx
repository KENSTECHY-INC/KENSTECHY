import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'network', label: 'Network Solutions' },
    { id: 'database', label: 'Database Systems' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with payment integration and inventory management.',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Church Management System',
      description: 'Comprehensive system for managing church members, events, and donations.',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'School Portal App',
      description: 'Mobile application for students, teachers, and parents to access school information.',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Corporate Network Setup',
      description: 'Secure network infrastructure for a 100+ employee organization.',
      category: 'network',
      image: '/api/placeholder/400/300',
      technologies: ['Cisco', 'pfSense', 'VPN', 'Firewall'],
      link: '#'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking with analytics and reporting features.',
      category: 'database',
      image: '/api/placeholder/400/300',
      technologies: ['PostgreSQL', 'Python', 'Django', 'Redis'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Restaurant POS System',
      description: 'Point of sale system with order management and customer analytics.',
      category: 'web',
      image: '/api/placeholder/400/300',
      technologies: ['Angular', 'Express.js', 'SQLite'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Local Business Owner',
      text: 'TechSolutions Pro transformed our business with their e-commerce platform. Sales increased by 200% in the first quarter!',
      rating: 5
    },
    {
      name: 'Pastor Michael',
      company: 'Community Church',
      text: 'The church management system has streamlined our operations and improved communication with our congregation.',
      rating: 5
    },
    {
      name: 'Dr. Emily Chen',
      company: 'Springfield School',
      text: 'The mobile app has revolutionized how we communicate with parents and students. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses and organizations achieve their technology goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="bg-secondary text-secondary-foreground p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground capitalize">
                    {project.category.replace('_', ' ')}
                  </span>
                  <a
                    href={project.link}
                    className="text-primary hover:text-accent transition-colors flex items-center space-x-1 text-sm font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">What Our Clients Say</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 card-hover"
              >
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-primary rounded-full"></div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. We're here to turn your vision into reality.
            </p>
            <a href="#contact" className="btn-primary">
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

