import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Zap, Smartphone, Cloud, Layout, Award, BookOpen, Users, Briefcase, Cpu, Radio, ChevronRight, Download, Menu, X, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Android Developer",
    "IoT Enthusiast", 
    "Raspberry Pi Expert",
    "Mobile Architect"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skills = [
    {
      category: "Android Development",
      items: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Material Design"]
    },
    {
      category: "Architecture & Patterns",
      items: ["MVVM", "Clean Architecture", "Repository Pattern", "Dependency Injection"]
    },
    {
      category: "IoT & Embedded",
      items: ["Python", "Raspberry Pi", "Sensors Integration", "GPIO Programming", "MQTT"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-bright-red" />,
      title: "Google Play Excellence Award",
      description: "Recognized for outstanding app quality and performance"
    },
    {
      icon: <Users className="w-8 h-8 text-neon-purple" />,
      title: "100K+ Downloads",
      description: "Combined downloads across published applications"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-bright-red" />,
      title: "Tech Speaker",
      description: "Regular speaker at Android development conferences"
    }
  ];

  const experiences = [
    {
      company: "Tech Corp",
      role: "Senior Android Developer",
      period: "2022 - Present",
      description: "Led development of flagship Android applications using Kotlin and Jetpack Compose",
      achievements: [
        "Implemented Clean Architecture patterns",
        "Reduced app size by 40%",
        "Mentored junior developers"
      ]
    },
    {
      company: "Mobile Solutions Inc",
      role: "Android Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple Android applications",
      achievements: [
        "Integrated Material Design 3",
        "Improved app performance by 60%",
        "Implemented CI/CD pipelines"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Building IoT Systems with Raspberry Pi and Android",
      date: "March 15, 2024",
      preview: "Learn how to create a complete IoT ecosystem using Raspberry Pi as the hub and an Android app as the control center.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Modern Android Development with Jetpack Compose",
      date: "March 1, 2024",
      preview: "Exploring the benefits and best practices of using Jetpack Compose for modern Android UI development.",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Sensor Integration in IoT Projects",
      date: "February 15, 2024",
      preview: "A comprehensive guide to integrating various sensors with Raspberry Pi for IoT applications.",
      gradient: "from-red-600 to-orange-600"
    }
  ];

  const certifications = [
    {
      title: "Associate Android Developer",
      issuer: "Google",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Kotlin for Android Developers",
      issuer: "JetBrains",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "IoT Fundamentals",
      issuer: "Cisco",
      icon: <Radio className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed w-full bg-darker-bg/95 backdrop-blur-md z-50 border-b border-neon-purple/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold gradient-text"
            >
              AKSHAR<span className="text-neon-purple">.</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4 pb-4"
            >
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              AKSHAR KALATHIYA
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 h-8"
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="skill-badge">
                <Smartphone className="w-5 h-5 text-bright-red" />
                Android
              </span>
              <span className="skill-badge">
                <Cpu className="w-5 h-5 text-neon-purple" />
                Raspberry Pi
              </span>
              <span className="skill-badge">
                <Radio className="w-5 h-5 text-bright-red" />
                IoT
              </span>
              <span className="skill-badge">
                <Code2 className="w-5 h-5 text-neon-purple" />
                Kotlin
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary"
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-secondary"
              >
                View Projects
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-heading">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  I'm a passionate developer specializing in Android development and IoT solutions. With expertise
                  in both mobile development and embedded systems, I create innovative solutions that bridge the
                  gap between mobile apps and IoT devices.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  My experience with Raspberry Pi and various sensors allows me to build comprehensive systems 
                  that make a real impact. I'm committed to writing clean, maintainable code and following best 
                  practices in software architecture.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="skill-badge text-sm">
                    <Zap className="w-4 h-4 text-bright-red" />
                    5+ Years Experience
                  </span>
                  <span className="skill-badge text-sm">
                    <Award className="w-4 h-4 text-neon-purple" />
                    Certified Professional
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Smartphone className="w-12 h-12 text-bright-red mb-3 mx-auto" />
                  <h3 className="font-bold mb-1">Android Dev</h3>
                  <p className="text-sm text-white/60">Native Apps</p>
                </motion.div>
                <motion.div 
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Cpu className="w-12 h-12 text-neon-purple mb-3 mx-auto" />
                  <h3 className="font-bold mb-1">IoT Expert</h3>
                  <p className="text-sm text-white/60">Raspberry Pi</p>
                </motion.div>
                <motion.div 
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code2 className="w-12 h-12 text-bright-red mb-3 mx-auto" />
                  <h3 className="font-bold mb-1">Clean Code</h3>
                  <p className="text-sm text-white/60">Architecture</p>
                </motion.div>
                <motion.div 
                  className="card text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-12 h-12 text-neon-purple mb-3 mx-auto" />
                  <h3 className="font-bold mb-1">Performance</h3>
                  <p className="text-sm text-white/60">Optimization</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 relative pl-8 border-l-2 border-neon-purple/30"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-bright-red animate-pulse"></div>
                <div className="card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold gradient-text">{exp.role}</h3>
                      <p className="text-white/60 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-white/40 text-sm md:text-base">{exp.period}</span>
                  </div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-bright-red mt-1 flex-shrink-0" />
                        <span className="text-white/70">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto">
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{skillSet.category}</h3>
                <ul className="space-y-3">
                  {skillSet.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Zap className="w-4 h-4 text-bright-red" />
                      <span className="text-white/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-3 text-neon-purple">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold mb-1">{cert.title}</h4>
                  <p className="text-sm text-white/60">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Smart Home Controller",
                description: "IoT system using Raspberry Pi and Android app for home automation with real-time monitoring",
                gradient: "from-purple-600 to-pink-600",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "Task Flow",
                description: "Productivity app with clean architecture, offline-first capabilities, and Material Design 3",
                gradient: "from-blue-600 to-cyan-600",
                icon: <Layout className="w-8 h-8" />
              },
              {
                title: "Weather Station",
                description: "IoT weather monitoring system with Raspberry Pi sensors and Android dashboard",
                gradient: "from-orange-600 to-red-600",
                icon: <Cloud className="w-8 h-8" />
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-darker-bg/50 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Akshar062" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:text-neon-purple/80 transition-colors flex items-center gap-1"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href="#" 
                    className="text-bright-red hover:text-bright-red/80 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto">
          <h2 className="section-heading">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${post.gradient} rounded-lg mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text group-hover:text-bright-red transition-colors">{post.title}</h3>
                <p className="text-white/60 mb-4 line-clamp-2 text-sm">{post.preview}</p>
                <a href="#" className="inline-flex items-center text-bright-red hover:text-bright-red/80 transition-colors text-sm font-semibold">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{achievement.title}</h3>
                <p className="text-white/60">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-darker-bg">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-heading">Get in Touch</h2>
            <p className="text-white/80 mb-12 text-lg">
              Let's collaborate on your next Android or IoT project
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.a 
                href="https://github.com/Akshar062" 
                target="_blank"
                rel="noopener noreferrer"
                className="card flex flex-col items-center gap-3 hover:border-neon-purple transition-all"
                whileHover={{ y: -5 }}
              >
                <Github className="w-8 h-8 text-neon-purple" />
                <span className="font-semibold">GitHub</span>
                <span className="text-sm text-white/60">@Akshar062</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/akshar-kalathiya-884401281" 
                target="_blank"
                rel="noopener noreferrer"
                className="card flex flex-col items-center gap-3 hover:border-bright-red transition-all"
                whileHover={{ y: -5 }}
              >
                <Linkedin className="w-8 h-8 text-bright-red" />
                <span className="font-semibold">LinkedIn</span>
                <span className="text-sm text-white/60">Connect with me</span>
              </motion.a>
              <motion.a 
                href="mailto:akshar@example.com" 
                className="card flex flex-col items-center gap-3 hover:border-neon-purple transition-all"
                whileHover={{ y: -5 }}
              >
                <Mail className="w-8 h-8 text-neon-purple" />
                <span className="font-semibold">Email</span>
                <span className="text-sm text-white/60">Get in touch</span>
              </motion.a>
            </div>
            <motion.a
              href="mailto:akshar@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Me a Message
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neon-purple/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left">
              © 2024 AKSHAR KALATHIYA. All rights reserved
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/Akshar062" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/akshar-kalathiya-884401281" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:akshar@example.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
