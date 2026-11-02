'use client'
export default function Header({ page, setPage }: { page: string, setPage: (p:string)=>void }){
  const nav = [{id:'home', label:'Home'}, {id:'listings', label:'Listings'}, {id:'about', label:'About'}, {id:'contact', label:'Contact'}]
  const solid = page !== 'home'
  const accent = solid ? 'bg-[#0a2540] text-white' : 'bg-white text-[#0a2540]'
  const navShell = solid ? 'bg-[#f7f9fb] border border-gray-200' : 'bg-white/10 border border-white/20 backdrop-blur-md'
  const navItem = (active: boolean) => active
    ? (solid ? 'bg-[#0a2540] text-white shadow-md' : 'bg-white text-[#0a2540] shadow-md')
    : (solid ? 'text-[#0a2540] hover:bg-[#0a2540]/10' : 'text-white hover:bg-white/15')
  return (
    <header className={`absolute top-0 w-full z-20 transition-colors duration-300 ${solid ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between transition-colors duration-300 ${solid ? 'text-[#0a2540]' : 'text-white'}`}>
        <button type="button" onClick={()=>setPage('home')} className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <span className={`${accent} w-9 h-9 grid place-items-center rounded-xl transition-colors duration-300`}>⌂</span> Rent H&U
        </button>
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-colors duration-300 ${navShell}`}>{nav.map(n=>(
          <button key={n.id} onClick={()=>setPage(n.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px ${navItem(page===n.id)}`}>{n.label}</button>
        ))}</nav>
        <button onClick={()=>setPage('contact')} className={`${accent} px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}>Try now</button>
      </div>
    </header>
  )
}
