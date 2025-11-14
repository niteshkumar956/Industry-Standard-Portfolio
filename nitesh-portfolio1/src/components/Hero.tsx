'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nitesh Kumar</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
          >
            <span className="border-r-2 border-blue-600 pr-2 animate-pulse">Full Stack Developer</span>
          </motion.div>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            B.Tech CSE (AI) Graduate | ML Engineer | Problem Solver | 200+ LeetCode Solved
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover:scale-105 transition-transform">
            NK
          </div>
        </motion.div>
      </div>
    </section>
  )
}