'use client'
import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    metadata: "Young Researchers Academy",
    description: "Training the next generation of researchers"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <main className="">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout 
