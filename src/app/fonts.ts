import { Alata, Be_Vietnam_Pro } from 'next/font/google'
 
export const alata = Alata({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-alata',
})
 
export const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-be-vietnam'
})