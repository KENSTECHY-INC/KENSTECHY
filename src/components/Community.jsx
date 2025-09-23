import React from 'react';
import { GraduationCap, Users, BookOpen, Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Community = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: 'Tech Workshops',
      description: 'Free technology awareness workshops for the general public',
      features: ['Basic Computer Skills', 'Internet Safety', 'Digital Literacy', 'Online Tools']
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Short-term training programs for students and professionals',
      features: ['Web Development', 'Mobile App Development', 'Database Management', 'Network Security']
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'One-on-one mentorship sessions to inspire young people in tech',
      features: ['Career Guidance', 'Project Support', 'Skill Development', 'Industry Insights']
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Technology support for local organizations and non-profits',
      features: ['Free Consultations', 'Discounted Services', 'Volunteer Work', 'Equipment Donations']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Introduction to Web Development',
      date: 'March 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Center',
      type: 'Workshop',
      spots: '15 spots available'
    },
    {
      title: 'Digital Marketing for Small Business',
      date: 'March 22, 2024',
      time: '10:00 AM - 1:00 PM',
      location: 'Local Library',
      type: 'Seminar',
      spots: '20 spots available'
    },
    {
      title: 'Cybersecurity Awareness',
      date: 'March 29, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Online',
      type: 'Webinar',
      spots: 'Unlimited'
    }
  ];

  const impact = [
    { number: '500+', label: 'People Trained' },
    { number: '50+', label: 'Workshops Conducted' },
    { number: '25+', label: 'Organizations Helped' },
    { number: '100+', label: 'Mentorship Hours' }
  ];

  return (
    <section id="community" className="py-20 bg-secondary/20">
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
            Community <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in giving back to our community by promoting digital literacy and supporting local organizations with technology education and resources.
          </p>
        </motion.div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="bg-secondary rounded-full p-3 w-fit mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <initiative.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{initiative.description}</p>
              <ul className="space-y-1">
                {initiative.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's how we've been making a difference in our community through technology education and support.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.map((stat, index) => (
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
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Upcoming Events</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us for our upcoming workshops, seminars, and training sessions. All events are free and open to the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{event.spots}</span>
                </div>

                <h4 className="text-lg font-semibold mb-3">{event.title}</h4>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="w-full mt-4 btn-primary text-sm">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get Involved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Get Involved in Our Community
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're looking to learn new skills, share your expertise, or support our mission, there are many ways to get involved with our community initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Volunteer With Us
              </a>
              <a href="#contact" className="btn-secondary">
                Request a Workshop
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;

