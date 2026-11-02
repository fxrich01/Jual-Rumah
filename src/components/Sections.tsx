import ListingGrid from '@/components/ListingGrid'
import type { Listing } from '@/lib/listings'

export function MostViewed({ listings, error, onSelect }: { listings: Listing[] | null, error: boolean, onSelect: (listing: Listing) => void }){
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Most Viewed</h2>
        <p className="text-gray-500 text-sm mt-2">Discover a range of vacation homes worldwide.</p>
        <div className="mt-10">
          <ListingGrid listings={listings?.slice(0, 3) ?? null} error={error} onSelect={onSelect}/>
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
