import { formatPrice, type Listing } from '@/lib/listings'

export default function ListingGrid({ listings, error, onSelect }: { listings: Listing[] | null, error: boolean, onSelect: (listing: Listing) => void }) {
  if (error) return <p className="text-center text-sm text-red-600 py-12">We couldn't load listings right now. Please try again later.</p>
  if (!listings) return <p className="text-center text-sm text-gray-500 py-12">Loading listings...</p>
  if (listings.length === 0) return <p className="text-center text-sm text-gray-500 py-12">No listings are available yet.</p>

  return (
    <div className="grid md:grid-cols-3 gap-6 text-left">
      {listings.map(listing => (
        <button key={listing.id} type="button" onClick={() => onSelect(listing)} className="bg-white rounded-[24px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer hover:-translate-y-1 transition text-left">
          <div className="h-[260px] overflow-hidden"><img src={listing.imageUrl} alt={listing.title} className="w-full h-full object-cover"/></div>
          <div className="p-5">
            <div className="text-xs text-gray-500">{listing.beds} beds • {listing.baths} baths • {listing.typology}</div>
            <div className="mt-2 font-semibold">{listing.title}</div>
            <div className="mt-1 font-bold">{formatPrice(listing.price)}</div>
          </div>
        </button>
      ))}
    </div>
  )
}
