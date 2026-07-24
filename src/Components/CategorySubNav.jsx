import { NavLink } from 'react-router-dom'
import { CATEGORY_NAV } from '../data/destinations'

function CategorySubNav() {
  return (
    <div className="mt-[85px] border-b-4 bg-white">
      <ul className="mx-auto flex max-w-7xl flex-wrap justify-end gap-6 px-6 py-3 md:gap-10 md:px-12 lg:pr-[200px]">
        {CATEGORY_NAV.map((item) => (
          <li key={item.path} className="text-lg">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group relative tracking-widest transition hover:text-black ${
                  isActive ? 'font-semibold text-black' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute my-2 block h-[9px] w-full rounded-t-[20px] bg-[#BFE7F7] transition ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySubNav
