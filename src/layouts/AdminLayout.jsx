import Navdash from '../Components/Navdash'
import Navdashh from '../Components/Navdashh'

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Navdash />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Navdashh />
        <main className="min-h-0 flex-1 border-2 border-t-0 border-l-0 bg-white p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
