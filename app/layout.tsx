import './globals.css'
import {Nunito} from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";

const font = Nunito({
    subsets: ['latin']
})

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ClientOnly>
            <Navbar/>
        </ClientOnly>
        {children}
        </body>
        </html>
    )
}
