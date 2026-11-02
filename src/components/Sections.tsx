
const cards = [
  {img:"/images/ocean-breeze.webp", name:"Ocean Breeze Villa", price:"€ 910.000,00"},
  {img:"/images/jakson-house.webp", name:"Jakson House", price:"€ 750.000,00"},
  {img:"/images/cliff-ocean.webp", name:"Lakeside Cottage", price:"€ 540.000,00"},
]
export function MostViewed({ onDetail }:{ onDetail:()=>void }){
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Most Viewed</h2>
        <p className="text-gray-400 text-sm mt-2">Discover a range of vacation homes worldwide. Book securely and get expert support.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {cards.map(c=>(
            <div key={c.name} onClick={onDetail} className="rounded-[24px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer hover:-translate-y-1 transition">
              <div className="h-[260px] overflow-hidden"><img src={c.img} className="w-full h-full object-cover"/></div>
              <div className="p-5"><div className="text-xs text-gray-400">123 Main Street, Anywhere, CA 12345 • 4 🛏 2 🛁</div><div className="mt-2 font-semibold">{c.name}</div><div className="mt-1 font-bold">{c.price}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function HowItWorks(){
  return (
    <section className="py-16 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {n:"01", t:"Search Property", d:"Browse thousands of verified villas."},
          {n:"02", t:"Book & Visit", d:"Schedule a visit or book securely."},
          {n:"03", t:"Live Happy", d:"Move in and enjoy your new home."},
        ].map(s=>(
          <div key={s.n} className="bg-white rounded-[20px] p-8 shadow-sm"><div className="w-10 h-10 rounded-full bg-[#0a2540] text-white grid place-items-center font-bold text-sm">{s.n}</div><h3 className="mt-4 font-bold">{s.t}</h3><p className="text-sm text-gray-500 mt-2">{s.d}</p></div>
        ))}
      </div>
    </section>
  )
}
