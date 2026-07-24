import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
