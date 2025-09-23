import React from 'react';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'We deliver high-quality solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in giving back and supporting our local community.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
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
            About <span className="gradient-text">TechSolutions Pro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of technology professionals dedicated to providing innovative solutions that drive business growth and community development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To build a trusted, innovative, and impactful technology company that solves real problems through affordable and quality IT solutions while establishing a solid tech brand with a strong online presence.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  We create business and networking opportunities while educating and inspiring people to embrace digital skills and solutions. Our goal is to make technology accessible and beneficial for everyone in our community.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Why Choose Us</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional expertise with practical experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Community-focused approach to technology</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Affordable solutions without compromising quality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Long-term partnerships and ongoing support</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we interact with our clients and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover group"
              >
                <div className="bg-secondary rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Building the Future Together
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our team consists of passionate technology professionals who are committed to delivering exceptional results. We combine technical expertise with a deep understanding of business needs to create solutions that truly make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Join Our Team
              </a>
              <a href="#portfolio" className="btn-secondary">
                See Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

