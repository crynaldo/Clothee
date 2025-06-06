"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star, Users } from "lucide-react"
import Image from "next/image"

export default function ClotheeWebsite() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="text-white/40 fill-white/20" size={Math.random() * 8 + 4} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-end">
            <Button
              className="bg-black border-gray-800 text-white hover:bg-green-500 hover:border-green-400 hover:text-black hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 ease-in-out transform hover:scale-105"
              asChild
            >
              <a
                href="https://www.roblox.com/communities/36077198/Clothee-Designs#!/about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Users size={16} />
                Visit Group
                <ExternalLink size={14} />
              </a>
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clothee Designs
            </h2>
          </div>
        </section>

        {/* Featured Product */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Featured Item</h3>
            <p className="text-gray-400">Our latest and most popular design</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/gray-hoodie.png"
                    alt="Gray Hoodie with Gloves"
                    width={300}
                    height={300}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="text-xl font-semibold text-white mb-2">Gray Hoodie with Gloves</h4>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">R$</span>
                    </div>
                    <span className="text-2xl font-bold text-white">5</span>
                    <span className="text-gray-400">Robux</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>❤️ 3</span>
                    <span>🛒 1</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href="https://www.roblox.com/communities/36077198/Clothee-Designs#!/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Buy Now
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-25px) translateX(-10px); }
          66% { transform: translateY(-5px) translateX(20px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          20% { transform: translateY(-15px) translateX(-5px); }
          40% { transform: translateY(-35px) translateX(15px); }
          60% { transform: translateY(-10px) translateX(-20px); }
          80% { transform: translateY(-25px) translateX(8px); }
        }
      `}</style>
    </div>
  )
}
