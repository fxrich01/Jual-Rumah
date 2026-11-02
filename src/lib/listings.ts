import { supabase } from '@/lib/supabase'

export type Listing = {
  id: string
  title: string
  address: string
  city: string
  typology: string
  price: number
  beds: number
  baths: number
  description: string
  imageUrl: string
}

const LISTING_COLUMNS = 'id,title,address,city,typology,price,beds,baths,description,imageUrl:image_url'

export async function fetchListings(): Promise<Listing[]> {
  if (!supabase) throw new Error('Supabase is not configured')
  const { data, error } = await supabase
    .from('listings')
    .select(LISTING_COLUMNS)
    .order('created_at', { ascending: false })
    .returns<Listing[]>()

  if (error) throw new Error(error.message)
  if (!Array.isArray(data)) throw new Error('Unexpected listings response')
  return data
}

export function formatPrice(amount: number): string {
  return `€ ${amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
