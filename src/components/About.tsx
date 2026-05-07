import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          关于我
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {profile.about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-400 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">技能栈</h3>
            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
