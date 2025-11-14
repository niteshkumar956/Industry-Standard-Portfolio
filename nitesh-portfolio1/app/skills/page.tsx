import { skills } from '@/lib/data'
import SkillCard from '@/components/SkillCard'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Technical Skills
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}