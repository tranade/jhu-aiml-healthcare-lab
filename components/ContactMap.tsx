'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Car, Bus, Train } from 'lucide-react'

const transportationOptions = [
  {
    icon: Car,
    title: 'By Car',
    description: 'Parking available in the JHU Homewood campus parking garages',
    details: 'Enter via North Charles Street or University Parkway',
  },
  {
    icon: Bus,
    title: 'By Bus',
    description: 'Multiple bus routes serve the Homewood campus',
    details: 'Routes 3, 11, 61, and 64 stop near campus',
  },
  {
    icon: Train,
    title: 'By Light Rail',
    description: 'Baltimore Light Rail stops at University of Baltimore station',
    details: '10-minute walk to Malone Hall',
  },
]

const nearbyAttractions = [
  'Johns Hopkins Hospital',
  'Baltimore Inner Harbor',
  'Johns Hopkins University Bookstore',
  'Charles Village',
  'Baltimore Museum of Art',
]

export default function ContactMap() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Johns Hopkins University's Homewood campus, our lab is easily accessible and welcomes visitors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Malone Hall, Johns Hopkins University<br />
                  3400 N. Charles Street<br />
                  Baltimore, MD 21218
                </p>
                <a
                  href="https://maps.google.com/?q=Johns+Hopkins+University+Malone+Hall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Transportation Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Here</h3>
              {transportationOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                      <p className="text-xs text-gray-500">{option.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Lab Location Details */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lab Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Malone Hall</p>
                    <p className="text-gray-600">Johns Hopkins University</p>
                    <p className="text-gray-600">3400 N. Charles Street</p>
                    <p className="text-gray-600">Baltimore, MD 21218</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Lab Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (410) 516-1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">aiml-healthcare@jhu.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={attraction}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visitor Information */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Visitor Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Please check in at the main entrance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Valid ID required for campus access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free parking available in designated areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Wheelchair accessible facilities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 