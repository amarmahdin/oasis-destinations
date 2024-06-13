import React from 'react'
import garjuno from '../Assets/garjuno.png'
import bri1 from '../Assets/bri1.png'

function Contnews() {
  return (
    <div className='py-32'>
        <div className='w-[1200px] h-[613px] border-2 mx-52 rounded-[24px] flex'>
            <div className='w-[450px] mx-14 my-12'>
                <h1 className='text-[33px] font-semibold'>Keajaiban Alam di Puncak Gunung Semeru: Pesona Matahari Terbit yang Memukau</h1>
                <p className='py-2'>Dengan pemandangan yang spektakuler dan udara yang segar, momen ini menjadi magnet bagi para pendaki dan pecinta alam untuk menikmati keajaiban alam yang luar biasa. Dari sinar matahari yang memancar hingga langit yang berubah warna, pengalaman menyaksikan matahari terbit di Gunung Semeru akan meninggalkan kenangan yang tak terlupakan bagi setiap pengunjung. Jangan lewatkan kesempatan untuk merasakan pesona matahari terbit di puncak Gunung Semeru dan biarkan diri Anda terpesona oleh keindahan alam yang memukau ini.</p>
            </div>
            <div className='w-[579px] translate-x-14 '>
                <img src={garjuno} alt="" className='h-[100%] rounded-r-[24px]'/>
            </div>
        </div>
        <div className='w-[1305px] h-[632px] ml-40 mt-20 rounded-3xl border-2'>
          <h1 className='text-[33px] font-semibold text-center mt-5'>Berita Pilihan</h1>
          <div className='w-[1200px] h-[240px] rounded-3xl border-2 ml-12 mt-8 flex'>
            <img src={bri1} alt="" className='rounded-l-3xl'/>
            <div>
            <h1 className='text-[23px] font-semibold ml-4'>Harga tiket masuk terjangkau membuat pengunjung tertarik untuk mengunjungi wisata</h1>
            <p className='ml-4 w-[800px] mt-3'>Air Terjun Coban Rondo, merupakan salah satu sebuah air terjun yang terdapat di Jawa Timur tepatnya di Kota Malang ini memiliki jumlah pengunjung yang selalu konsisten. Pada setiap minggunya, total pengunjung yang datang hampir tidak pernah kurang dari 100 orang. Hal tersebut ditunjang dengan harga tiket masuk yang murah disertai dengan akses menuju wisata yang mudah untuk dikunjungi oleh para wisatawan.</p>
            </div>
          </div>
          <div className='w-[1200px] h-[240px] rounded-3xl border-2 ml-12 mt-8 flex'>
            <img src={bri1} alt="" className='rounded-l-3xl'/>
            <div>
            <h1 className='text-[23px] font-semibold ml-4'>Harga tiket masuk terjangkau membuat pengunjung tertarik untuk mengunjungi wisata</h1>
            <p className='ml-4 w-[800px] mt-3'>Air Terjun Coban Rondo, merupakan salah satu sebuah air terjun yang terdapat di Jawa Timur tepatnya di Kota Malang ini memiliki jumlah pengunjung yang selalu konsisten. Pada setiap minggunya, total pengunjung yang datang hampir tidak pernah kurang dari 100 orang. Hal tersebut ditunjang dengan harga tiket masuk yang murah disertai dengan akses menuju wisata yang mudah untuk dikunjungi oleh para wisatawan.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contnews