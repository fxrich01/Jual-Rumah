
import "./globals.css";
export const metadata = { title: "Rent H&U - Finding Your New Home Is Simple", description: "Premium vacation rental platform" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="bg-white text-slate-900 antialiased">{children}</body></html>
}
