import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png'
import h from '../Assets/h.png'
import k from '../Assets/k.png'
import a from '../Assets/a.png'
import b from '../Assets/b.png'
import u from '../Assets/u.png'

const ADMIN_LINKS = [
  { label: 'Dashboard', path: '/Admindashboard', icon: h },
  { label: 'Kelola Wisata', path: '/Adminkelolawisata', icon: k },
  { label: 'Kelola Akun', path: '/Adminakunpengelola', icon: a },
  { label: 'Kelola Berita', path: '/Admindashboard', icon: b },
  { label: 'Ulasa Berita', path: '/Admindashboard', icon: u },
]

function Navdash() {
  return (
    <aside className="flex w-[300px] shrink-0 flex-col border-2 bg-white">
      <div className="ml-16 mt-8">
        <img src={logo} alt="Oasis" className="w-[142px]" />
      </div>
      <nav className="mt-14 flex flex-col gap-8 px-14 pb-10">
        {ADMIN_LINKS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 text-[#252525] ${isActive ? 'font-semibold' : ''}`
            }
          >
            <img src={item.icon} alt="" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Navdash
