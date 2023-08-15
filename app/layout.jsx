'use client'
import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';


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
