export const projects = [
  {
    id: 1,
    title: "Book Recommendation System",
    description: "Content-based recommendation engine with 85% accuracy using NLP, TF-IDF, and cosine similarity. Personalized user preferences integration.",
    tech: ["Flask", "Python", "MySQL", "NLP", "Scikit-learn", "NLTK", "Pandas"],
    link: "https://github.com/yourusername/book-recommendation",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "House Rent Prediction Model",
    description: "Ensemble ML model (XGBoost + Random Forest) achieving 0.91 R² score. Deployed as Flask API. Published research paper.",
    tech: ["XGBoost", "Random Forest", "Flask", "Scikit-learn", "Pandas"],
    link: "https://github.com/yourusername/house-rent-prediction",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop"
  }
]

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "Java", "SQL", "C"],
    icon: "code"
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    icon: "palette"
  },
  {
    category: "Backend",
    items: ["Node.js", "Flask", "Express", "REST APIs", "GraphQL"],
    icon: "server"
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    icon: "database"
  },
  {
    category: "ML/AI",
    items: ["Scikit-learn", "TensorFlow", "NLP", "XGBoost", "Pandas", "NumPy"],
    icon: "brain"
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "IntelliJ", "AWS", "Linux"],
    icon: "toolbox"
  }
]

export const achievements = [
  { title: "Research Paper Published", number: 1, icon: "file-text", desc: "Ensemble ML Methods" },
  { title: "LeetCode Problems Solved", number: 200, icon: "code", desc: "Strong DSA" },
  { title: "GeeksforGeeks Solutions", number: 50, icon: "lightbulb", desc: "Active Contributor" },
  { title: "Professional Certifications", number: 4, icon: "certificate", desc: "HackerRank, AWS" }
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]