'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, Mail, Award, Users, BookOpen } from 'lucide-react'

const teamMembers = [
  {
    name: 'Prof. Suchi Saria',
    role: 'Principal Investigator',
    title: 'Associate Professor, Computer Science & Medicine',
    image: '/api/placeholder/400/500',
    bio: 'Leading researcher in machine learning for healthcare, with expertise in clinical decision support systems and predictive modeling.',
    research: ['Clinical Decision Support', 'Predictive Healthcare', 'Patient Safety'],
    education: 'PhD, Stanford University',
    awards: ['NSF CAREER Award', 'Sloan Research Fellowship', 'MIT TR35'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'saria@jhu.edu'
    }
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Postdoctoral Researcher',
    title: 'Machine Learning & Healthcare Analytics',
    image: '/api/placeholder/400/500',
    bio: 'Specializes in deep learning for medical imaging and electronic health record analysis.',
    research: ['Medical Imaging', 'EHR Analytics', 'Deep Learning'],
    education: 'PhD, MIT',
    awards: ['Google PhD Fellowship'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'schen@jhu.edu'
    }
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Research Scientist',
    title: 'Clinical Decision Support Systems',
    image: '/api/placeholder/400/500',
    bio: 'Expert in developing AI systems for real-time clinical decision making and patient monitoring.',
    research: ['Real-time Monitoring', 'Clinical AI', 'Patient Safety'],
    education: 'PhD, UC Berkeley',
    awards: ['NIH K99 Award'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'mrodriguez@jhu.edu'
    }
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Senior Research Associate',
    title: 'Population Health & Epidemiology',
    image: '/api/placeholder/400/500',
    bio: 'Focuses on large-scale healthcare data analysis and population health interventions.',
    research: ['Population Health', 'Epidemiology', 'Public Health AI'],
    education: 'PhD, Harvard University',
    awards: ['CDC Fellowship'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'ewatson@jhu.edu'
    }
  }
]

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: BookOpen, value: '100+', label: 'Publications' },
  { icon: Award, value: '25+', label: 'Awards & Grants' },
]

export default function Team() {
  return (
    <section id="team" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our interdisciplinary team brings together expertise in machine learning, computer science, medicine, and healthcare to advance the field of AI in healthcare.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Principal Investigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-64 h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">SS</span>
                    </div>
                    <div className="text-gray-600">Photo</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Prof. Suchi Saria
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mb-2">
                    Principal Investigator
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    Associate Professor, Computer Science & Medicine
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Professor Suchi Saria is a leading researcher in machine learning for healthcare, with expertise in clinical decision support systems and predictive modeling. Her work has been published in top-tier venues including Nature Medicine, JAMA, and ICML.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Research Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Clinical Decision Support', 'Predictive Healthcare', 'Patient Safety', 'Real-time Monitoring'].map((area) => (
                        <span key={area} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition</h4>
                    <div className="space-y-2">
                      {['NSF CAREER Award', 'Sloan Research Fellowship', 'MIT TR35', 'NIH Director\'s New Innovator Award'].map((award) => (
                        <div key={award} className="flex items-center text-sm text-gray-600">
                          <Award className="h-4 w-4 mr-2 text-primary-600" />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </a>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <Globe className="h-5 w-5 mr-2" />
                    Website
                  </a>
                  <a href="mailto:saria@jhu.edu" className="flex items-center text-primary-600 hover:text-primary-700">
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 card-hover border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-semibold mb-2">
                {member.role}
              </p>
              
              <p className="text-sm text-gray-600 mb-4">
                {member.title}
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm">Research Focus</h4>
                <div className="flex flex-wrap gap-1">
                  {member.research.map((area) => (
                    <span key={area} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 