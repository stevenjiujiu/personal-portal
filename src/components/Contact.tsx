import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          联系方式
        </h2>
        <p className="text-gray-400 mb-8">
          有项目想法或合作机会？欢迎随时联系我
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            发送邮件
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
