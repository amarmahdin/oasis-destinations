import { Link } from 'react-router-dom'
import right from '../Assets/right.png'

function DestinationCard({
  name,
  image,
  categoryLabel,
  categoryIcon,
  hours,
  location,
  price,
  detailPath,
}) {
  return (
    <article className="flex w-full max-w-[370px] flex-col overflow-hidden rounded-[20px] border-[3px] bg-white">
      <div className="h-[205px] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex h-[39px] items-center gap-2 bg-[#F1F5F9] px-4">
        <img src={categoryIcon} alt="" className="h-[30px] w-[30px]" />
        <h2 className="text-lg font-semibold text-gray-500">{categoryLabel}</h2>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
        <h3 className="text-[23px] font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{hours}</p>
        <p className="text-sm text-gray-400">{location}</p>
        <p className="mt-1 font-semibold italic text-[#0BAE7A]">Harga Tiket Masuk</p>
        <p className="font-semibold text-[#0047FF]">{price}</p>
        {detailPath ? (
          <Link
            to={detailPath}
            className="mt-auto flex items-center justify-end gap-2 pt-2 text-[12px] underline"
          >
            Selengkapnya
            <img src={right} alt="" className="h-4 w-4" />
          </Link>
        ) : (
          <span className="mt-auto flex items-center justify-end gap-2 pt-2 text-[12px] text-gray-400 underline">
            Selengkapnya
            <img src={right} alt="" className="h-4 w-4 opacity-50" />
          </span>
        )}
      </div>
    </article>
  )
}

export default DestinationCard
