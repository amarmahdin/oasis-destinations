import cus from '../Assets/cus.png'
import putus from '../Assets/putus.png'

function RentalPackageCard({ name, capacity, detail, price, image }) {
  return (
    <article className="flex w-full max-w-[1140px] flex-col gap-4 rounded-xl border-4 bg-white p-4 md:flex-row md:items-start md:justify-between md:p-6">
      <div className="min-w-0 flex-1">
        <h3 className="text-[26px] font-medium">{name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <img src={cus} alt="" />
          <p className="text-gray-500">{capacity}</p>
        </div>
        <h4 className="mt-2 text-[23px] font-medium text-E">Detail</h4>
        <p className="italic">{detail}</p>
      </div>
      <div className="shrink-0 md:w-[260px]">
        <div className="h-[200px] overflow-hidden rounded-2xl border-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <img src={putus} alt="" className="mt-3 hidden w-full max-w-[800px] md:block" />
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-[27px] text-[#0BAE7A]">{price}</p>
          <button type="button" className="rounded-md border-2 bg-E px-2 py-0.5 text-white">
            Beli Paket
          </button>
        </div>
      </div>
    </article>
  )
}

export default RentalPackageCard
