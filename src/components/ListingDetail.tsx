import { formatPrice, type Listing } from '@/lib/listings'

export default function ListingDetail({ listing }: { listing: Listing }){
  return (
    <div className="pt-28 max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="h-[420px] rounded-[24px] overflow-hidden"><img src={listing.imageUrl} alt={listing.title} className="w-full h-full object-cover"/></div>
          <h1 className="mt-6 text-3xl font-bold">{listing.title}</h1>
          <p className="mt-3 text-gray-600 leading-relaxed">{listing.description}</p>
        </div>
        <div>
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold">{formatPrice(listing.price)}</div>
            <div className="text-sm text-gray-500">{listing.address}, {listing.city}</div>
            <div className="mt-4 text-sm text-gray-600">{listing.beds} beds • {listing.baths} baths • {listing.typology}</div>
            <button className="mt-6 w-full bg-[#0a2540] text-white py-3 rounded-full">Book Visit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
