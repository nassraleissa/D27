import Image from 'next/image'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A scalable online marketplace built with microservices architecture.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "AI-powered Analytics Dashboard",
    description: "Real-time data visualization with predictive insights.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["Python", "TensorFlow", "D3.js"]
  },
  {
    title: "Smart City IoT Solution",
    description: "Integrated system for managing urban infrastructure and services.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["IoT", "Cloud Computing", "Big Data"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Innovative solutions we've delivered for our clients
          </p>
        </div>
        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col lg:flex-row 
                ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} 
                items-center gap-8
              `}
            >
              <div className="flex-1 relative w-full aspect-video lg:aspect-square">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover rounded-lg shadow-lg" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-4 text-lg text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="mt-6">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
