import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Avatar with animated border */}
        <div className="relative w-40 h-40 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400" />
          <div className="absolute inset-2 rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
            <span className="text-6xl">{profile.avatar}</span>
          </div>
        </div>

        {/* Main title with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          {profile.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:opacity-90 transition-all hover:scale-105"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105"
          >
            联系我
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
