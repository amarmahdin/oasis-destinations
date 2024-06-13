import React from 'react'
import orgggg from '../../Assets/orgggg.png'

function Contakunpengelola() {
  return (
    <div className='ml-[303px] mt-1 border-2 bg-white w-[1333px] h-[999px] absolute -translate-y-[1000px]'>
      <h1 className='text-[25px] font-semibold ml-3 mt-2'>Akun Pengelola</h1>
      <div className='float-start'>
        <a href=""><button className='border-2 py-0.5 px-1 ml-3 rounded-lg text-white bg-blue-300'>Tambah</button></a>
      </div>
      <div className='float-end mr-5 flex'>
      <h1 className='text-[#464E5F] text-[14px] mt-4 mr-2'>Show</h1>
      <form action="" className='w-16 h-5 flex border-2 rounded-md mr-4 mt-4'>
      <svg xmlns="http://www.w3.org/2000/svg" className='translate-x-6 mt-1' width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M1 1L5 5L9 1" stroke="#464E5F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </form>
    <h1 className='text-[#464E5F] text-[14px] mt-4 mr-2'>Entries</h1>
    <form action="" className='w-full flex border-2 rounded-lg'>
        <input type="text" name='search' placeholder='Search' className='w-[150px] ml-2'/>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-9 cursor-pointer' viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
    </form>
      </div>
      <div>
        <table className='w-[1300px] translate-y-3 ml-3 '>
          <thead className='bg-[#27738E]'>
            <tr className='text-white'>
            <th className="py-2">NO</th>
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
            <tr className=''>
              <td className=''>1</td>
              <td><img src={orgggg} alt="" className='w-[100px]'/></td>
              <td>Pantai Plengkung</td>
              <td>Pantai</td>
              <td>Banyuwangi</td>
              <td>Banyuwangi</td>
              <td>Banyuwangi</td>
              <td>Banyuwangi</td>
              <div className='mt-3'>
              <button className='px-2 py-1 border-2 rounded-xl bg-blue-100 text-gray-500'>Detail</button>
              <button className='px-2 py-1 border-2 rounded-xl bg-red-200 text-white'>Hapus</button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contakunpengelola