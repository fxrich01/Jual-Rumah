import { ShieldCheck, Eye, MapPin } from 'lucide-react'

const stats = [
  { value: '10k+', label: 'Properties' },
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Verified listings' },
]

const values = [
  { icon: ShieldCheck, title: 'Verified Listings', text: 'Every property is checked before it appears on our site, so what you see is what you get.' },
  { icon: Eye, title: 'Transparent Pricing', text: 'Clear prices and no hidden fees. You always know what you are committing to.' },
  { icon: MapPin, title: 'Local Expertise', text: 'Our team knows the neighborhoods well and helps you find the right area for your life.' },
]

export default function AboutPage({ onExplore }: { onExplore: () => void }){
  return (
    <div className="pb-20">
      <section className="relative h-[420px] w-full overflow-hidden bg-[#0a2540]">
        <img src="https://images.pexels.com/photos/30965188/pexels-photo-30965188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Mediterranean villa with lush gardens" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/60 to-transparent"/>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center pt-16">
          <div className="max-w-xl text-white">
            <p className="text-sm uppercase tracking-widest text-white/70">About us</p>
            <h1 className="mt-3 text-5xl font-extrabold leading-[1.1]">Inspired by Spanish villas</h1>
            <p className="mt-4 text-white/80 leading-relaxed">Rent H&U is a premium rental platform built to make finding your new home simple and luxurious.</p>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold leading-tight">Our story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">We started with a simple belief: finding a home should feel exciting, not exhausting. Our mission is to connect people with beautiful, carefully selected properties and to support them at every step, from the first search to the day they move in.</p>
          <p className="mt-4 text-gray-600 leading-relaxed">Every listing is reviewed, every price is transparent, and every visit is backed by people who care about getting it right.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {stats.map(s=>(
            <div key={s.label} className="bg-[#f7f9fb] rounded-2xl p-6 text-center shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-extrabold text-[#0a2540]">{s.value}</div>
              <div className="mt-2 text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">What we stand for</h2>
            <p className="mt-3 text-gray-500">Three promises we keep with every client.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {values.map(v=>(
              <div key={v.title} className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-white grid place-items-center"><v.icon className="w-6 h-6" aria-hidden="true"/></div>
                <h3 className="mt-6 font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0a2540] px-8 py-16 md:px-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to find your new home?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Browse our verified listings and book a visit in just a few clicks.</p>
          <button onClick={onExplore} className="mt-8 bg-white text-[#0a2540] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">Explore Listings</button>
        </div>
      </section>
    </div>
  )
}
