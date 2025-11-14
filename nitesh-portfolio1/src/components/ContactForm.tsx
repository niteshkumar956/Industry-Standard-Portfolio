'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, Loader } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  projectType: z.enum(['web', 'ml', 'mobile', 'other'], {
    required_error: 'Please select project type',
  }),
  budget: z.enum(['under-500', '500-1000', '1000-5000', '5000+'], {
    required_error: 'Please select budget range',
  }),
  timeline: z.enum(['urgent', 'week', 'month', 'flexible'], {
    required_error: 'Please select timeline',
  }),
  requirements: z.string().min(10, 'Please provide detailed requirements'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">Name *</label>
          <input
            {...register('name')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-2 font-medium">Email *</label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium">Phone (Optional)</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          placeholder="+91 9315429311"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">Project Type *</label>
          <select
            {...register('projectType')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="">Select project type</option>
            <option value="web">Web Development</option>
            <option value="ml">Machine Learning</option>
            <option value="mobile">Mobile App</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
        </div>
        <div>
          <label className="block mb-2 font-medium">Budget Range *</label>
          <select
            {...register('budget')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="">Select budget</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
          {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium">Timeline *</label>
        <select
          {...register('timeline')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        >
          <option value="">Select timeline</option>
          <option value="urgent">Urgent (ASAP)</option>
          <option value="week">Within a week</option>
          <option value="month">Within a month</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">Project Requirements *</label>
        <textarea
          {...register('requirements')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          rows={6}
          placeholder="Describe your project requirements in detail..."
        />
        {errors.requirements && (
          <p className="text-red-500 text-sm mt-1">{errors.requirements.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? <Loader className="animate-spin" /> : <Send />}
        {isSubmitting ? 'Sending...' : 'Send Your Requirements'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          ✅ Message sent! I'll reply within 24 hours at {''}
          <a href="mailto:Niteshkuamrr956@gmail.com" className="underline">
            Niteshkuamrr956@gmail.com
          </a>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          ❌ Failed to send. Email me directly: Niteshkuamrr956@gmail.com
        </div>
      )}
    </motion.form>
  )
}