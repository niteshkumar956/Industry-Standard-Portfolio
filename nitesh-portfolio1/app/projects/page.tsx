import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}