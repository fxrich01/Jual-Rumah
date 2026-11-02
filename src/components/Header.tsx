'use client'
export default function Header({ page, setPage }: { page: string, setPage: (p:string)=>void }){
  const nav = [{id:'home', label:'Home'}, {id:'listings', label:'Listings'}, {id:'about', label:'About'}, {id:'contact', label:'Contact'}]
  const solid = page !== 'home'
  const accent = solid ? 'bg-[#0a2540] text-white' : 'bg-white text-[#0a2540]'
  return (
    <header className={`absolute top-0 w-full z-20 transition-colors duration-300 ${solid ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-6 py-5 flex items-center justify-between transition-colors duration-300 ${solid ? 'text-[#0a2540]' : 'text-white'}`}>
        <button type="button" onClick={()=>setPage('home')} className="flex items-center gap-2 font-bold text-xl hover:opacity-80">
          <span className={`${accent} w-8 h-8 grid place-items-center rounded-lg`}>⌂</span> Rent H&U
        </button>
        <nav className="hidden md:flex gap-8 text-sm">{nav.map(n=>(
          <button key={n.id} onClick={()=>setPage(n.id)} className={`${page===n.id?'font-bold border-b border-current':''} hover:opacity-80`}>{n.label}</button>
        ))}</nav>
        <button onClick={()=>setPage('contact')} className={`${accent} px-5 py-2 rounded-full text-sm font-semibold`}>Try now</button>
      </div>
    </header>
  )
}
