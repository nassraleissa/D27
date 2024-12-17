import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Technology Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Innovate with</span>
          <span className="block text-blue-300">TechNova</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We're not just an IT company. We're your partners in digital transformation, bringing cutting-edge solutions to your business challenges.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-blue-300 hover:bg-white/20">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  )
}
