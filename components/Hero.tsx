'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Award, value: '100+', label: 'Publications' },
  { icon: TrendingUp, value: '25+', label: 'Research Projects' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                Johns Hopkins University
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Advancing Healthcare Through{' '}
                <span className="gradient-text">AI & Machine Learning</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Led by Professor Suchi Saria, our lab pioneers innovative research at the intersection of artificial intelligence, machine learning, and healthcare to improve patient outcomes and transform medical practice.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/team"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all duration-300"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Latest Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Machine Learning for Early Detection of Sepsis in Critical Care Settings" - 
                Published in Nature Medicine, 2024
              </p>
              <Link
                href="/publications"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium mt-3"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 