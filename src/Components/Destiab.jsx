import { Link } from 'react-router-dom'
import desti from '../Assets/desti.png'
import kart from '../Assets/kart.png'
import pnt from '../Assets/pnt.png'
import gng from '../Assets/gng.png'
import air from '../Assets/air.png'
import lny from '../Assets/lny.png'
import next from '../Assets/next.png'

const CATEGORIES = [
  {
    title: 'Pantai',
    image: pnt,
    path: '/Pantai',
    description: 'Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota',
  },
  {
    title: 'Gunung',
    image: gng,
    path: '/Gunung',
    description: 'Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota',
  },
  {
    title: 'Air Terjun',
    image: air,
    path: '/Airterjun',
    description: 'Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota',
  },
  {
    title: 'Lainnya',
    image: lny,
    path: '/Lainnya',
    description: 'Klik tombol untuk melihat destinasi wisata pantai yang ada di berbagai kota',
  },
]

function Destiab() {
  return (
    <div className="pt-20">
      <section className="relative">
        <img src={desti} alt="" className="w-full" />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-6 text-white md:px-16 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="max-w-[700px] text-3xl font-medium md:text-[50px]">
            Kunjungi Destinasi Wisata Terbaik di Jawa Timur
          </h1>
          <div className="max-w-[600px] lg:text-right">
            <p className="text-xl font-medium md:text-[30px]">
              Klik tombol dibawah untuk melihat destinasi wisata yang tersedia saat ini!
            </p>
            <a href="#y">
              <button
                type="button"
                className="mt-4 h-[60px] w-[230px] rounded-[51px] bg-white text-[25px] font-medium text-black"
              >
                Wisata
              </button>
            </a>
          </div>
        </div>
      </section>

      <div
        id="y"
        className="mx-auto mt-10 flex w-full max-w-[1280px] flex-col items-center gap-6 rounded-xl border-2 border-[#BFE7F7] px-6 py-6 md:flex-row md:px-10"
      >
        <img src={kart} alt="" className="shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold md:text-[30px]">Udah punya akun belum?</h2>
          <p className="text-lg md:text-[20px]">
            Buat akun atau log in yuk, biar bisa beli tiket wisata tanpa ribet ✌️😍
          </p>
        </div>
        <Link
          to="/Login"
          className="flex h-[62px] w-[176px] items-center justify-center rounded-xl bg-[#BFE7F7] text-[29px] font-semibold text-[#0047FF]"
        >
          Masuk
        </Link>
      </div>

      <section className="mt-16 bg-[#EDF5F9] px-6 py-8 md:px-[180px]">
        <h2 className="py-5 text-4xl font-semibold md:text-[48px]">Kategori</h2>
        <p className="text-2xl text-gray-500">Menampilkan {CATEGORIES.length} hasil kategori</p>
        <div className="mt-7 space-y-10">
          {CATEGORIES.map((category) => (
            <article key={category.path} className="relative w-full max-w-[1291px] overflow-hidden rounded-xl">
              <img src={category.image} alt={category.title} className="h-[200px] w-full rounded-xl object-cover" />
              <div className="absolute inset-0 flex items-center justify-between px-6 md:px-14">
                <div>
                  <h3 className="text-4xl font-semibold text-white md:text-[64px]">{category.title}</h3>
                  <p className="max-w-xl text-white md:text-xl">{category.description}</p>
                </div>
                <Link to={category.path} className="shrink-0">
                  <img src={next} alt={`Lihat ${category.title}`} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Destiab
