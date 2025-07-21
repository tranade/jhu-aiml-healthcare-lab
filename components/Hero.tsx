'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '50+', label: 'Team Members', color: 'emerald' },
  { icon: Award, value: '100+', label: 'Publications', color: 'violet' },
  { icon: TrendingUp, value: '25+', label: 'Research Projects', color: 'rose' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-0">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-emerald-900/10 via-transparent to-violet-900/10" />
      
      {/* Enhanced Animated background elements with depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl glow-primary"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl glow-accent"
        />
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl glow-emerald"
        />
        <motion.div
          animate={{ rotate: -180 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-500/15 to-indigo-500/15 rounded-full blur-2xl glow-violet"
        />
      </div>

      <div className="relative z-10 container-max section-padding mobile-padding px-10 sm:px-12 lg:px-12 pb-16 sm:pb-20 lg:pb-20">
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium glass-effect-emerald"
              >
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
                Johns Hopkins University
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight text-shadow"
              >
                Advancing Healthcare Through{' '}
                <span className="gradient-text text-glow-primary">AI & Machine Learning</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Led by Professor Suchi Saria, our lab pioneers innovative research at the intersection of artificial intelligence, machine learning, and healthcare to improve patient outcomes and transform medical practice.
              </motion.p>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/research"
                className="dark-button-emerald inline-flex items-center justify-center px-8 py-4"
              >
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/team"
                className="dark-button-secondary-violet inline-flex items-center justify-center px-8 py-4"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Stats */}
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
                  className={`dark-card-${stat.color} p-6 text-center card-hover-${stat.color} depth-layer-2`}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color}-400 mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-100">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="dark-card-amber p-6 depth-layer-3"
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-3">Latest Research</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Machine Learning for Early Detection of Sepsis in Critical Care Settings" - 
                Published in Nature Medicine, 2024
              </p>
              <Link
                href="/publications"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium mt-3 transition-colors"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator with depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center glass-effect depth-layer-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 