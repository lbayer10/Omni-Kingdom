import './globals.css';
import { Inter } from 'next/font/google';
import { PlayerContainer } from '@/containers/player';
import { Header } from "@/components/layout/header";
import { Footer } from "@/containers/layout/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* FUNCKY THEME STYLE */}
                <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="assets/css/funky-style.css"/>
            </head>

            <body className={inter.className}>
                <Header />

                {children}
                <PlayerContainer />

                <Footer />
            </body>
        </html>
    )
}
