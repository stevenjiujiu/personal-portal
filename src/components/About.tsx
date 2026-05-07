import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          关于我
        </h2>
        {/* 个人介绍 - 全宽展示 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {profile.about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 技能栈 - 卡片网格 */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">技能栈</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(profile.skills).map(([category, items]) => (
              <div
                key={category}
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
              >
                <h4 className="text-sm font-medium text-purple-400 mb-3">{category}</h4>
                <ul className="space-y-1.5">
                  {items.map((skill: string) => (
                    <li key={skill} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-purple-500/60 mt-2 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
