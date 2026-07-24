import { Link, NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Destination', path: '/Destination' },
  { label: 'About', path: '/About' },
  { label: 'News', path: '/News' },
]

function Header() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex h-[85px] items-center justify-between bg-white px-6 md:px-16 lg:px-28">
      <Link to="/">
        <img src={logo} alt="Oasis Destinations" className="w-[150px]" />
      </Link>

      <ul className="hidden items-center gap-8 md:flex lg:gap-10">
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `group relative text-base tracking-widest transition hover:text-E ${
                  isActive ? 'text-E' : 'text-gray-400'
                }`
              }
            >
              {item.label}
              <span className="absolute h-0.5 w-full scale-x-0 bg-E/80 transition group-hover:scale-x-100" />
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link
          to="/Signup"
          className="rounded-md border-2 border-E px-[17px] py-[3px] text-E"
        >
          Sign Up
        </Link>
        <Link
          to="/Login"
          className="rounded-md border-2 border-E bg-E px-[17px] py-[3px] text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Header
