import Image from 'next/image'

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Samantha Lee",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400"
  }
]

export default function Team() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

