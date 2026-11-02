
export default function Hero(){
  return (
    <div className="relative h-[680px] w-full overflow-hidden bg-[#0a2540]">
      <img src="/images/hero-villa.webp" alt="hero" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/60 to-transparent"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-[56px] font-extrabold leading-[1.05]">Finding Your New Home Is Simple</h1>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">RentHomes.com is your go to destination for finding the perfect rental home to suit your needs. With thousands of property listings across the United States, and Europe.</p>
        </div>
      </div>
      {/* floating search */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white rounded-full shadow-2xl p-2 flex items-center gap-2">
        <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">City Street</div><div className="font-semibold text-sm">123Street</div></div>
        <div className="w-px h-8 bg-gray-200"/>
        <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">Tipology of rent</div><div className="font-semibold text-sm">Villa</div></div>
        <div className="w-px h-8 bg-gray-200"/>
        <div className="flex-1 px-6 py-2"><div className="text-[10px] uppercase text-gray-400">Price</div><div className="font-semibold text-sm">€ 950.000,00</div></div>
        <button className="bg-[#0a2540] text-white px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-2">⌕ Search</button>
      </div>
    </div>
  )
}
