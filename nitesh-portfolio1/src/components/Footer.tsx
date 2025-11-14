import Link from 'next/link'
import { Github, Linkedin, Mail, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="mailto:Niteshkuamrr956@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </Link>
          <Link href="https://leetcode.com/yourusername" className="hover:text-blue-400 transition-colors">
            <Code size={24} />
          </Link>
        </div>
        <p className="text-center text-gray-400">
          © 2024 Nitesh Kumar. Built with Next.js & ❤️
        </p>
      </div>
    </footer>
  )
}