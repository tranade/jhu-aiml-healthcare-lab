'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Users, Award, Globe, Linkedin, Twitter, Github } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'aiml-healthcare@jhu.edu',
    description: 'General inquiries and collaborations',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (410) 516-1234',
    description: 'Lab office and main contact',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Malone Hall, Johns Hopkins University',
    description: '3400 N. Charles Street, Baltimore, MD 21218',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Monday - Friday, 9:00 AM - 5:00 PM',
    description: 'By appointment for external visitors',
  },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Website', href: '#', icon: Globe },
]

export default function Contact() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-max mobile-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="dark-card p-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full dark-input rounded-lg"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full dark-input rounded-lg"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full dark-input rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full dark-input rounded-lg"
                    placeholder="Your organization or institution"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select id="subject" className="w-full dark-input rounded-lg">
                    <option value="">Select a subject</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="partnership">Industry Partnership</option>
                    <option value="visit">Lab Visit</option>
                    <option value="position">Job Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full dark-input rounded-lg"
                    placeholder="Tell us about your inquiry or collaboration proposal..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full dark-button py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="dark-card p-6 card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-100 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary-400 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="dark-card p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6 text-gray-300 hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-6 text-white glow-border">
                <h3 className="text-lg font-semibold mb-4">
                  Lab Overview
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-primary-100">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-primary-100">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-primary-100">Research Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-primary-100">Awards & Grants</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 