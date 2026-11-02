
'use client'
import Link from 'next/link'
export default function Header({ page, setPage }: { page: string, setPage: (p:string)=>void }){
  const nav = [{id:'home', label:'Home'}, {id:'listings', label:'Listings'}, {id:'about', label:'About'}, {id:'contact', label:'Contact'}]
  return (
    <header className="absolute top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 font-bold text-xl"><span className="bg-white text-[#0a2540] w-8 h-8 grid place-items-center rounded-lg">⌂</span> Rent H&U</div>
        <nav className="hidden md:flex gap-8 text-sm">{nav.map(n=>(
          <button key={n.id} onClick={()=>setPage(n.id)} className={`${page===n.id?'font-bold border-b border-white':''} hover:opacity-80`}>{n.label}</button>
        ))}</nav>
        <button onClick={()=>setPage('contact')} className="bg-white text-[#0a2540] px-5 py-2 rounded-full text-sm font-semibold">Try now</button>
      </div>
    </header>
  )
}
