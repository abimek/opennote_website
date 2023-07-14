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
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout 
