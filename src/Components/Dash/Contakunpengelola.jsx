import orgggg from '../../Assets/orgggg.png'
import TableToolbar from './TableToolbar'

const ROWS = [
  {
    id: 1,
    foto: orgggg,
    nama: 'Pantai Plengkung',
    pengelola: 'Pantai',
    username: 'Banyuwangi',
    password: 'Banyuwangi',
    email: 'Banyuwangi',
    phone: 'Banyuwangi',
  },
]

function Contakunpengelola() {
  return (
    <div className="p-4">
      <h1 className="text-[25px] font-semibold">Akun Pengelola</h1>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <button type="button" className="rounded-lg border-2 bg-blue-300 px-2 py-0.5 text-white">
          Tambah
        </button>
        <TableToolbar />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[1100px] text-left">
          <thead className="bg-E text-white">
            <tr>
              <th className="px-2 py-2">NO</th>
              <th className="px-2 py-2">FOTO</th>
              <th className="px-4 py-2">NAMA</th>
              <th className="px-4 py-2">PENGELOLA</th>
              <th className="px-4 py-2">USERNAME</th>
              <th className="px-4 py-2">PASSWORD</th>
              <th className="px-4 py-2">EMAIL</th>
              <th className="px-4 py-2">NO HANDPHONE</th>
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
                <td className="px-4 py-3">{row.pengelola}</td>
                <td className="px-4 py-3">{row.username}</td>
                <td className="px-4 py-3">{row.password}</td>
                <td className="px-4 py-3">{row.email}</td>
                <td className="px-4 py-3">{row.phone}</td>
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

export default Contakunpengelola
