'use client'
import { useEffect, useState } from 'react'
import { MostViewed, HowItWorks } from '@/components/Sections'
import ListingGrid from '@/components/ListingGrid'
import ListingDetail from '@/components/ListingDetail'
import { fetchListings, type Listing } from '@/lib/listings'

export default function Page(){
  const [page, setPage] = useState('home')
  const [selected, setSelected] = useState<Listing | null>(null)
  const [listings, setListings] = useState<Listing[] | null>(null)
  const [listingsError, setListingsError] = useState(false)

  useEffect(()=>{
    let active = true
    fetchListings()
      .then(data => { if (active) setListings(data) })
      .catch(() => { if (active) setListingsError(true) })
    return () => { active = false }
  }, [])

  const openListing = (listing: Listing) => {
    setSelected(listing)
    setPage('detail')
  }

  return (
    <main>
      <header className="absolute top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 font-bold text-xl"><span className="bg-white text-[#0a2540] w-8 h-8 grid place-items-center rounded-lg">⌂</span> Rent H&U</div>
          <nav className="hidden md:flex gap-8 text-sm">
            {['home','listings','about','contact'].map(id=>(
              <button key={id} onClick={()=>setPage(id)} className={`${page===id?'font-bold border-b border-white':''} capitalize hover:opacity-80`}>{id}</button>
            ))}
          </nav>
          <button onClick={()=>setPage('contact')} className="bg-white text-[#0a2540] px-5 py-2 rounded-full text-sm font-semibold">Try now</button>
        </div>
      </header>

      {page==='home' && (
        <>
          <div className="relative h-[680px] w-full overflow-hidden bg-[#0a2540]">
            <img src="/images/hero-villa.webp" alt="hero" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/60 to-transparent"/>
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-[56px] font-extrabold leading-[1.05]">Finding Your New Home Is Simple</h1>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">RentHomes.com is your go to destination for finding the perfect rental home to suit your needs. With thousands of property listings across the United States, and Europe.</p>
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 z-20">
              <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">City Street</div><div className="font-semibold text-sm">123Street</div></div>
              <div className="w-px h-8 bg-gray-200"/>
              <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">Tipology of rent</div><div className="font-semibold text-sm">Villa</div></div>
              <div className="w-px h-8 bg-gray-200"/>
              <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">Price</div><div className="font-semibold text-sm">€ 950.000,00</div></div>
              <button onClick={()=>setPage('listings')} className="bg-[#0a2540] text-white px-8 py-4 rounded-full text-sm font-semibold">⌕ Search</button>
            </div>
          </div>

          <MostViewed listings={listings} error={listingsError} onSelect={openListing}/>

          <HowItWorks/>

          <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[32px] overflow-hidden h-[400px] relative"><img src="/images/hero-villa.webp" className="w-full h-full object-cover"/><div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-xl"><div className="text-2xl font-bold">10k+</div><div className="text-xs text-gray-500">Properties</div></div></div>
            <div><h2 className="text-4xl font-bold leading-tight">The Easiest Method To Find a House</h2><ul className="mt-6 space-y-3 text-sm"><li>✔ Verified listings only</li><li>✔ Virtual tours & 24/7 support</li><li>✔ Secure booking & contracts</li></ul><button onClick={()=>setPage('listings')} className="mt-8 bg-[#0a2540] text-white px-8 py-3 rounded-full">Explore Listings</button></div>
          </section>
        </>
      )}

      {page==='listings' && (
        <div className="pt-28 max-w-7xl mx-auto px-6 pb-20">
          <h1 className="text-4xl font-bold">All Listings</h1>
          <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
            <aside className="bg-white border rounded-2xl p-6 h-fit"><h3 className="font-bold">Filters</h3><div className="mt-4 space-y-4 text-sm text-gray-600"><div>Price: €0 - €1M</div><div>Typology: Villa, Cottage</div><div>Beds: 2,3,4+</div></div></aside>
            <ListingGrid listings={listings} error={listingsError} onSelect={openListing}/>
          </div>
        </div>
      )}

      {page==='detail' && selected && <ListingDetail listing={selected}/>}

      {page==='about' && (
        <div className="pt-28 max-w-7xl mx-auto px-6 pb-20"><h1 className="text-4xl font-bold">About Rent H&U</h1><p className="mt-4 text-gray-600 max-w-2xl">We are a premium rental platform inspired by Spanish villas. Our mission is to make finding your new home simple and luxurious.</p></div>
      )}

      {page==='contact' && (
        <div className="pt-28 max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12"><div><h1 className="text-4xl font-bold">Contact Us</h1><form className="mt-6 space-y-4"><input placeholder="Name" className="w-full border rounded-xl p-3"/><input placeholder="Email" className="w-full border rounded-xl p-3"/><textarea placeholder="Message" className="w-full border rounded-xl p-3 h-32"/><button className="bg-[#0a2540] text-white px-8 py-3 rounded-full">Send</button></form></div><div className="bg-[#f7f9fb] rounded-2xl p-8"><h3 className="font-bold">Visit us</h3><p className="text-sm text-gray-600 mt-2">Andalucía, Spain</p></div></div>
      )}

      <footer className="bg-[#0a2540] text-white py-12 mt-20"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm"><div><div className="font-bold text-lg">Rent H&U</div><p className="text-white/60 mt-2">Finding your new home is simple.</p></div><div><div className="font-semibold">Company</div><div className="mt-2 space-y-1 text-white/60"><div>About</div><div>Listings</div></div></div><div><div className="font-semibold">Support</div><div className="mt-2 space-y-1 text-white/60"><div>Contact</div><div>FAQ</div></div></div><div><div className="font-semibold">Newsletter</div><div className="flex mt-2"><input placeholder="Email" className="rounded-l-full px-4 py-2 text-black"/><button className="bg-white text-[#0a2540] px-4 rounded-r-full">→</button></div></div></div></footer>
    </main>
  )
}
