import { Link } from 'react-router-dom'
import plengkung from '../../Assets/plengkung.png'
import TableToolbar from './TableToolbar'

const ROWS = [
  {
    id: 1,
    foto: plengkung,
    nama: 'Pantai Plengkung',
    kategori: 'Pantai',
    lokasi: 'Banyuwangi',
  },
]

function Contwisata() {
  return (
    <div className="p-4">
      <h1 className="text-[25px] font-semibold">Kelola Wisata</h1>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/Admintambahwisata"
          className="rounded-lg border-2 bg-blue-300 px-2 py-0.5 text-white"
        >
          Tambah
        </Link>
        <TableToolbar />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-E text-white">
            <tr>
              <th className="px-2 py-2">NO</th>
              <th className="px-2 py-2">FOTO</th>
              <th className="px-4 py-2">NAMA</th>
              <th className="px-4 py-2">KATEGORI</th>
              <th className="px-4 py-2">LOKASI</th>
              <th className="px-4 py-2">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="px-2 py-3">{row.id}</td>
                <td className="px-2 py-3">
                  <img src={row.foto} alt={row.nama} className="w-[100px]" />
                </td>
                <td className="px-4 py-3">{row.nama}</td>
                <td className="px-4 py-3">{row.kategori}</td>
                <td className="px-4 py-3">{row.lokasi}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button type="button" className="rounded-xl border-2 bg-blue-100 px-2 py-1 text-gray-500">
                      Detail
                    </button>
                    <button type="button" className="rounded-xl border-2 bg-red-200 px-2 py-1 text-white">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contwisata
