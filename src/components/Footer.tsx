import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {profile.name}的个人作品集. 保留所有权利.</p>
      </div>
    </footer>
  )
}
