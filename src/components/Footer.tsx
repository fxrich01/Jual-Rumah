const companyLinks = [{ id: 'about', label: 'About' }, { id: 'listings', label: 'Listings' }]
const supportLinks = [{ id: 'contact', label: 'Contact' }]

export default function Footer({ onNavigate }: { onNavigate: (page: string) => void }){
  return (
    <footer className="bg-[#0a2540] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <button type="button" onClick={()=>onNavigate('home')} className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <span className="bg-white text-[#0a2540] w-9 h-9 grid place-items-center rounded-xl">⌂</span> Rent H&U
          </button>
          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">Finding your new home is simple. Premium rentals inspired by Spanish villas.</p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {companyLinks.map(l=>(
              <li key={l.id}><button type="button" onClick={()=>onNavigate(l.id)} className="text-white/60 hover:text-white transition-colors">{l.label}</button></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Support</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {supportLinks.map(l=>(
              <li key={l.id}><button type="button" onClick={()=>onNavigate(l.id)} className="text-white/60 hover:text-white transition-colors">{l.label}</button></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Newsletter</h4>
          <p className="mt-4 text-white/60 text-sm">Get new listings and market updates in your inbox.</p>
          <form className="mt-4 flex items-center bg-white rounded-full p-1 focus-within:ring-2 focus-within:ring-white/40" onSubmit={e=>e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email address" className="flex-1 min-w-0 bg-transparent px-4 py-2 text-sm text-[#0a2540] placeholder:text-gray-400 outline-none"/>
            <button type="submit" className="bg-[#0a2540] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#143a5f] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Rent H&U. All rights reserved.</div>
          <div>Andalucía, Spain</div>
        </div>
      </div>
    </footer>
  )
}
