import { Link } from 'react-router-dom'
import left from '../Assets/left.png'
import locg from '../Assets/locg.png'
import RentalPackageCard from './RentalPackageCard'

const SECTION_LINKS = [
  { href: '#r', label: 'Ringkasan' },
  { href: '#p', label: 'Persewaan' },
  { href: '#f', label: 'Fasilitas' },
  { href: '#l', label: 'Lokasi' },
]

function DestinationDetail({ data }) {
  const {
    name,
    heroImage,
    backPath,
    address,
    ticketPrice,
    mapEmbed,
    mapLink,
    rentals = [],
    facilities = [],
  } = data

  return (
    <div>
      <img src={heroImage} alt={name} className="w-full object-cover" />

      <div className="px-4 pt-3 md:px-10">
        <div className="mt-1 flex flex-wrap items-center gap-6 md:gap-10">
          <Link to={backPath}>
            <img src={left} alt="Kembali" />
          </Link>
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-lg font-medium tracking-widest text-gray-400 hover:text-[#0047FF]"
            >
              {link.label}
              <span className="absolute mt-3 h-1 w-full scale-x-0 bg-[#0047FF] transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div id="r" className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[800px] lg:ml-20">
            <h1 className="text-3xl font-semibold md:text-[36px]">{name}</h1>
            <div className="mt-2 flex items-start gap-2">
              <img src={locg} alt="" className="mt-1 shrink-0" />
              <p>{address}</p>
            </div>
          </div>
          <div className="shrink-0 lg:mr-16">
            <p>Beli Tiket Masuk</p>
            <button
              type="button"
              className="mt-2 rounded-[10px] border-2 px-3 py-2 text-[#0BAE7A]"
            >
              {ticketPrice}
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-4 mt-10 border-t border-gray-200 md:mx-16" />

      <p className="ml-4 mt-6 text-[20px] md:ml-28">Persewaan</p>
      <div
        id="p"
        className="mx-4 mb-6 mt-3 space-y-10 rounded-xl bg-[#EDF5F9] px-4 py-10 md:mx-28 md:px-16"
      >
        {rentals.map((item, index) => (
          <RentalPackageCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>

      <hr className="mx-4 mt-10 border-t border-gray-200 md:mx-16" />

      <div
        id="f"
        className="mx-auto my-10 w-full max-w-[921px] rounded-2xl border-2 border-[#83D6FE] bg-[#E4F6FF] px-6 py-10 md:px-16"
      >
        <h2 className="text-[30px] font-semibold">FASILITAS</h2>
        <p>Fasilitas yang tersedia pada wisata.</p>
        <ul className="mt-5 list-disc rounded-xl border-4 bg-white px-8 py-4 text-gray-600">
          {facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
      </div>

      <hr className="mx-4 mt-10 border-t border-gray-200 md:mx-16" />

      <div
        id="l"
        className="mx-auto my-10 w-full max-w-[1304px] overflow-hidden rounded-2xl border-4"
      >
        <iframe
          src={mapEmbed}
          width="100%"
          height="216"
          allowFullScreen
          loading="lazy"
          className="rounded-t-2xl"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta ${name}`}
        />
        <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-3">
            <img src={locg} alt="" className="mt-1 shrink-0" />
            <p className="max-w-[1010px] text-lg md:text-[20px]">{address}</p>
          </div>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md border-2 bg-[#0047FF] px-3 py-2 text-center text-white"
          >
            Lihat Peta
          </a>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetail
