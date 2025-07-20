'use client'

import { motion } from 'framer-motion'
import { Brain, Activity, Shield, Database, TrendingUp, Zap } from 'lucide-react'

const researchAreas = [
  {
    icon: Brain,
    title: 'Clinical Decision Support',
    description: 'Developing AI systems that assist healthcare providers in making informed clinical decisions through real-time data analysis and predictive modeling.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Activity,
    title: 'Predictive Healthcare',
    description: 'Building machine learning models to predict patient outcomes, disease progression, and treatment responses for personalized medicine.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Shield,
    title: 'Patient Safety & Quality',
    description: 'Creating AI-powered systems to monitor patient safety, detect adverse events, and improve healthcare quality metrics.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Database,
    title: 'Healthcare Data Analytics',
    description: 'Developing advanced analytics tools to extract insights from electronic health records, medical imaging, and clinical trials.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Population Health',
    description: 'Leveraging AI to analyze population-level health data for disease prevention, public health interventions, and health policy.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Zap,
    title: 'Real-time Monitoring',
    description: 'Building intelligent monitoring systems for continuous patient surveillance and early warning systems in critical care.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
]

export default function ResearchAreas() {
  return (
    <section id="research" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Research Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on cutting-edge research at the intersection of artificial intelligence, machine learning, and healthcare to address the most pressing challenges in modern medicine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${area.bgColor} rounded-2xl p-8 card-hover border border-gray-100`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6`}>
                <area.icon className={`h-8 w-8 ${area.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Research Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Featured Research: Early Sepsis Detection
              </h3>
              <p className="text-lg text-primary-100 leading-relaxed mb-6">
                Our latest breakthrough in early sepsis detection using machine learning has shown a 40% improvement in detection accuracy compared to traditional methods, potentially saving thousands of lives annually.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  Nature Medicine
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  Clinical Trials
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  FDA Approved
                </span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Detection Accuracy</span>
                  <span className="font-bold">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>False Positive Rate</span>
                  <span className="font-bold">2.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Time to Detection</span>
                  <span className="font-bold">2.3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lives Saved</span>
                  <span className="font-bold">500+</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 