import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Terminal, Zap, Smartphone, Database, Cloud, Layout, Award, BookOpen, Users, Briefcase, Cpu, Radio, ChevronRight } from 'lucide-react';

function App() {
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
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Modern Android Development with Jetpack Compose",
      date: "March 1, 2024",
      preview: "Exploring the benefits and best practices of using Jetpack Compose for modern Android UI development.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Sensor Integration in IoT Projects",
      date: "February 15, 2024",
      preview: "A comprehensive guide to integrating various sensors with Raspberry Pi for IoT applications.",
      image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed w-full bg-darker-bg/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold gradient-text animate-glow"
            >
              AKSHAR<span className="text-neon-purple">.</span>
            </motion.div>
            <div className="flex gap-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
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
            <h1 className="text-6xl font-bold mb-6 gradient-text animate-glow">
              AKSHAR KALATHIYA
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Android Developer | IoT Enthusiast | Raspberry Pi Expert
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <span className="flex items-center gap-2 text-white/60">
                <Smartphone className="w-5 h-5 text-bright-red" />
                Android
              </span>
              <span className="flex items-center gap-2 text-white/60">
                <Cpu className="w-5 h-5 text-neon-purple" />
                Raspberry Pi
              </span>
              <span className="flex items-center gap-2 text-white/60">
                <Radio className="w-5 h-5 text-bright-red" />
                IoT
              </span>
            </div>
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-bright-red text-white rounded-full hover:bg-bright-red/90 transition-colors"
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border border-neon-purple text-white rounded-full hover:bg-neon-purple/10 transition-colors"
              >
                View Projects
              </motion.a>
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
              <p className="text-white/80 mb-6">
                I'm a passionate developer specializing in Android development and IoT solutions. With expertise
                in both mobile development and embedded systems, I create innovative solutions that bridge the
                gap between mobile apps and IoT devices. My experience with Raspberry Pi and various sensors
                allows me to build comprehensive systems that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="card">
                  <Smartphone className="w-8 h-8 text-bright-red mb-2" />
                  <h3 className="font-bold mb-1">Android Dev</h3>
                  <p className="text-sm text-white/60">Native Apps</p>
                </div>
                <div className="card">
                  <Cpu className="w-8 h-8 text-neon-purple mb-2" />
                  <h3 className="font-bold mb-1">IoT Expert</h3>
                  <p className="text-sm text-white/60">Raspberry Pi</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.img
                animate={{ y: [-10, 10] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt="Development Setup"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-bright-red/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12 relative pl-8 border-l-2 border-neon-purple/30"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-bright-red"></div>
                <div className="card">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{exp.role}</h3>
                      <p className="text-white/60">{exp.company}</p>
                    </div>
                    <span className="text-white/40">{exp.period}</span>
                  </div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-bright-red" />
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-bright-red" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Controller",
                description: "IoT system using Raspberry Pi and Android app for home automation",
                image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Task Flow",
                description: "Productivity app with clean architecture and offline-first capabilities",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Weather Station",
                description: "IoT weather monitoring system with Raspberry Pi and Android dashboard",
                image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden"
              >
                <div className="h-48 relative mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-bright-red/20"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-neon-purple hover:text-neon-purple/80 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-bright-red hover:text-bright-red/80 transition-colors">
                    <Smartphone className="w-6 h-6" />
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-bright-red/20"></div>
                </div>
                <div className="text-white/60 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-2 gradient-text">{post.title}</h3>
                <p className="text-white/60 mb-4 line-clamp-2">{post.preview}</p>
                <a href="#" className="inline-flex items-center text-bright-red hover:text-bright-red/80 transition-colors">
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
            <p className="text-white/80 mb-12">Let's collaborate on your next Android or IoT project</p>
            <div className="flex justify-center gap-8">
              <a href="https://github.com/Akshar062" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/akshar-kalathiya-884401281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:aksharkalathiya2740@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-white/60">
        <p>© 2024 AKSHAR KALATHIYA. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
