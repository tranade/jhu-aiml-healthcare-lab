'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, MapPin, Phone, Globe } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  research: [
    { name: 'Clinical Decision Support', href: '/research' },
    { name: 'Predictive Healthcare', href: '/research' },
    { name: 'Patient Safety & Quality', href: '/research' },
    { name: 'Healthcare Data Analytics', href: '/research' },
  ],
  team: [
    { name: 'Prof. Suchi Saria', href: '/team' },
    { name: 'Current Members', href: '/team' },
    { name: 'Alumni', href: '/team' },
    { name: 'Join Our Team', href: '/contact' },
  ],
  resources: [
    { name: 'Publications', href: '/publications' },
    { name: 'Code & Data', href: '#' },
    { name: 'Lab Blog', href: '#' },
    { name: 'News & Events', href: '#' },
  ],
  contact: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Directions', href: '/contact' },
    { name: 'Collaborations', href: '/contact' },
    { name: 'Media Inquiries', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Email', href: 'mailto:aiml-healthcare@jhu.edu', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Lab Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JHU</span>
              </div>
              <span className="font-semibold text-lg">
                AIML Healthcare Lab
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advancing healthcare through innovative AI and machine learning research at Johns Hopkins University.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-primary-400" />
                <span className="text-sm">Malone Hall, JHU</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-primary-400" />
                <span className="text-sm">+1 (410) 516-1234</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-primary-400" />
                <span className="text-sm">aiml-healthcare@jhu.edu</span>
              </div>
            </div>
          </motion.div>

          {/* Research Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Research Areas</h3>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Team Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Team</h3>
            <ul className="space-y-3">
              {footerLinks.team.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                © 2024 JHU AIML Healthcare Lab. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Accessibility
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="h-4 w-4" />
                <span>Powered by Johns Hopkins University</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 