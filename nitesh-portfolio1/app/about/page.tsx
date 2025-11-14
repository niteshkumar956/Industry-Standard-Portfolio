
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-8"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl space-y-6 text-lg"
      >
        <p>
          I'm a <strong>B.Tech Computer Science Engineering (AI)</strong> graduate from GL Bajaj Institute of Technology & Management with a passion for building intelligent systems and scalable web applications.
        </p>
        <p>
          With <strong>200+ LeetCode problems solved</strong> and a published research paper on ensemble methods, I bring strong problem-solving skills and technical depth to every project.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-bold text-blue-600">200+</h3>
            <p>LeetCode Problems</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-green-600">91%</h3>
            <p>R² Score (House Prediction)</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}