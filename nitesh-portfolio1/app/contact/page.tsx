import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        Let's Work Together
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12 text-gray-600 dark:text-gray-300"
      >
        Have a project in mind? Share your requirements and I'll get back within 24 hours.
      </motion.p>
      <ContactForm />
    </section>
  )
}