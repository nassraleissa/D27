import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforming Businesses Through Technology
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At TechNova, we believe in the power of innovative technology to drive business success. 
            Our team of experts is dedicated to delivering cutting-edge solutions that transform 
            your digital landscape.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 relative h-96 w-full mb-8 lg:mb-0">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-8db880c41968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="TechNova Team" 
              fill 
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="mb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Approach</h3>
              <p className="mt-2 text-base text-gray-500">
                We combine deep technical expertise with a client-centric approach, 
                ensuring tailored solutions that meet your unique business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
