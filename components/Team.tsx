'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, Mail, Award, Users, TrendingUp, BookOpen } from 'lucide-react'

const teamMembers = [
  {
    name: 'Prof. Suchi Saria',
    role: 'Principal Investigator',
    title: 'Associate Professor, Computer Science & Medicine',
    bio: 'Leading researcher in machine learning for healthcare, with expertise in clinical decision support, predictive modeling, and real-time monitoring systems. Published in top-tier venues including Nature Medicine, JAMA, and ICML.',
    researchAreas: ['Clinical Decision Support', 'Predictive Healthcare', 'Patient Safety', 'Real-time Monitoring'],
    awards: ['NSF CAREER Award', 'Sloan Research Fellowship', 'MIT TR35', 'NIH Director\'s New Innovator Award'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'mailto:saria@jhu.edu',
    },
    image: '/api/placeholder/400/400',
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Senior Research Scientist',
    title: 'Machine Learning & Healthcare Analytics',
    bio: 'Expert in developing machine learning models for clinical decision support and patient outcome prediction. Specializes in interpretable AI and healthcare data analytics.',
    researchAreas: ['Clinical Decision Support', 'Interpretable AI', 'Healthcare Analytics'],
    awards: ['NIH K99 Award', 'Best Paper Award, AMIA 2023'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'mailto:sjohnson@jhu.edu',
    },
    image: '/api/placeholder/400/400',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Research Scientist',
    title: 'Real-time Monitoring & Critical Care',
    bio: 'Focused on developing real-time monitoring systems for critical care settings, with expertise in signal processing and early warning systems.',
    researchAreas: ['Real-time Monitoring', 'Critical Care', 'Signal Processing'],
    awards: ['AHRQ Grant Recipient', 'IEEE EMBS Young Investigator'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'mailto:mchen@jhu.edu',
    },
    image: '/api/placeholder/400/400',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Postdoctoral Fellow',
    title: 'Population Health & Epidemiology',
    bio: 'Researcher specializing in population health analytics and epidemiological modeling using AI and machine learning approaches.',
    researchAreas: ['Population Health', 'Epidemiology', 'Public Health AI'],
    awards: ['NIH F32 Fellowship', 'Population Health Award'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#',
      email: 'mailto:erodriguez@jhu.edu',
    },
    image: '/api/placeholder/400/400',
  },
]

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: BookOpen, value: '100+', label: 'Publications' },
  { icon: TrendingUp, value: '25+', label: 'Research Projects' },
  { icon: Award, value: '15+', label: 'Awards & Grants' },
]

export default function Team() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-max mobile-padding">
        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="dark-card p-6 text-center card-hover"
            >
              <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-100">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="dark-card p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Photo */}
                <div className="lg:col-span-1">
                  <div className="w-full aspect-square bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-primary-400 font-semibold text-lg mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Research Areas */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-100 mb-3">Research Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.researchAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-100 mb-3">Awards & Recognition</h4>
                    <div className="space-y-2">
                      {member.awards.map((award) => (
                        <div key={award} className="flex items-center text-gray-300">
                          <Award className="h-4 w-4 mr-3 text-primary-400" />
                          <span className="text-sm">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = platform === 'linkedin' ? Linkedin : 
                                   platform === 'twitter' ? Twitter :
                                   platform === 'website' ? Globe : Mail
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                          aria-label={platform}
                        >
                          <Icon className="h-5 w-5 text-gray-300 hover:text-white" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 