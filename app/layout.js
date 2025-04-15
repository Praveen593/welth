import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/header'
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({subsets : ["latin"],
  weight:['100','400','700','900'],
})// changing the font of the ui

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>  
    <html lang="en">
      <body
        className={`${inter.className} `} 
      >{/* header */}
      <Header/> 
      <main className="min-h-screen pt-14">
        {children}
      </main > 
      <Toaster richColors />
        {/* footer */}
        <footer className="bg-black/40 py-6">
          <div className="container mx-auto px-4 text-center text-white">
            <p> Made by Praveen-Luci 🤍 </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider> // intergrated the application into clerk
  );
};