import React from 'react'
import tabuan from '../Assets/tabuan.png'
import loc from '../Assets/loc.png'
import date from '../Assets/date.png'
import user from '../Assets/user.png'
import gear from '../Assets/gear.png'
import ticket from '../Assets/ticket.png'
import tips from '../Assets/tips.png'
import news from '../Assets/news.png'
import shape from '../Assets/shape.png'

function Content() {
  return (
    <div className=''>
      <div className='bg-gradient-to-l from-slate-600/5 to-blue-900/70 h-[1154px] w-[808.12px] absolute '>
    <div className='-translate-y-16 flex absolute bg-white h-[135px] left-[250px] w-[1100px] border-2 rounded-[25px]'>
      <div className='w-[199px] mx-11  flex py-5'>
        <div className='py-9'>
        <img src={loc} alt="" className='w-5 h-6 '/>
        </div>
        <div className='py-5 px-3 '>
           <h1 className='font-bold text-[20px]'>Destination</h1>
           <span className='text-[13px] text-slate-400'>Enter your destinations</span>
        </div>
      </div>
      <div className='w-[190px]  px-3 flex py-5 border-x'>
        <div className='py-9'>
        <img src={date} alt="" className='w-[25px] h-[25px] '/>
        </div>
        <div className='py-5 px-3'>
           <h1 className='font-bold text-[20px]'>Date</h1>
           <span className='text-[13px] text-slate-400'>When it will start?</span>
        </div>
      </div>
      <div className='w-[200px] px-3 flex py-5 border-x'>
        <div className='py-9'>
        <img src={user} alt="" className='w-[25px] h-[25px] '/>
        </div>
        <div className='py-5 px-3'>
           <h1 className='font-bold text-[20px]'>People</h1>
           <span className='text-[13px] text-slate-400'>How many people?</span>
        </div>
      </div>
      <div className='w-[200px]  px-3 flex py-5'>
        <div className='py-9'>
        <img src={gear} alt="" className='w-[32px] h-[25px] '/>
        </div>
        <div className='py-5 px-3 w-[200px]'>
           <h1 className='font-bold text-[20px]'>Gear</h1>
           <span className='text-[13px] text-slate-400'>Gear do you need?</span>
        </div>
      </div>
      <div className='py-8'>
        <button className='border-2 bg-E text-white font-medium py-4 px-5 rounded-xl text-lg'>Explore Now</button>
      </div>
    </div>
    <div className='absolute pl-[65px] pr-[59px] py-[14px] text-gray-400 bg-white rounded-[50px] justify-end items-start gap-[227px] inline-flex top-[200px] left-[540px] w-[573px] h-[60px]'>
      <form action="" className='w-full flex'>
        <input type="text" name='search' placeholder='Search Tourist Spot' className='w-[100%]'/>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-9 cursor-pointer' viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
    </form>
    </div>
    </div>
    <div className=' absolute h-[447px] my-96 mx-14  flex '>
      <div className='overflow-auto px-2 w-[1000px]'>
<h1>hahahahah</h1>
      </div>
      <div className='overflow-auto px-3 '>
<h1>hahahahah</h1>
      </div>
      <div className='overflow-auto'>
<h1>hahahahah</h1>
      </div>
    </div>
        <img src={tabuan} alt="" className='w-[100%]'/>
        <div className='bg-[#3D809829] h-[300px] flex'>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={ticket}  alt="" className='absolute -translate-y-16 px-3'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[320px]'>
            <h1 className='text-E font-medium text-lg text-center'>Pesan Tiket dengan Mudah</h1>
            <p className='text-E text-sm text-center'>Jelajahi Petualangan Tanpa Akhir! Sewa Perlengkapan & Dapatkan Tiket Anda Disini!</p>
            </div>
          </div>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={tips}  alt="" className='absolute -translate-y-16 px-3'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[310px]'>
            <h1 className='text-E font-medium text-lg text-center'>Tip & Info Perjalanan</h1>
            <p className='text-E text-sm text-center'>Petualangan Menanti! Dapatkan Tips & Info Traveling Terbaru di Website Kami!</p>
            </div>
            
          </div>
          <div className=' w-[400px] h-[211px] translate-y-9 grid justify-items-stretch translate-x-[200px]'>
            <div className='justify-self-center py-[38px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none"> <circle cx="38.5" cy="38.5" r="38.5" fill="white" className=''/> </svg>
            <img src={news}  alt="" className='absolute -translate-y-16 px-4'/>
            </div>
            <div className='-translate-y-6 translate-x-10 w-[310px]'>
            <h1 className='text-E font-medium text-lg text-center'>Pembaruan Berita</h1>
            <p className='text-E text-sm text-center'>Rencanakan Liburan Impian Anda dengan Informasi Akurat: Baca Berita Perjalanan Kami!</p>
            </div>
          </div>
        </div>
        <div>
            <img src={shape} alt="" className='w-[100%]'/>
            <h1 className='absolute -translate-y-[650px] ml-16 text-E text-[40px] font-semibold w-[600px]'>JELAJAHI CARA BERBEDA UNTUK PERJALANAN</h1>
            <p className='absolute -translate-y-[480px] w-[600px] text-justify text-E ml-16 text-base'>Mulailah petualangan tak terlupakan di Jawa Timur dengan platform pemesanan tiket dan penyewaan perlengkapan terintegrasi kami! Jelajahi destinasi menakjubkan, benamkan diri Anda dalam pengalaman budaya yang kaya, dan ciptakan kenangan yang tak terlupakan seumur hidup.</p>
            <p className='absolute -translate-y-[380px] w-[600px] text-justify text-E ml-16 text-base'>Jelajahi pegunungan yang megah, saksikan matahari terbit di atas kaldera, dan ciptakan kenangan tak terlupakan dengan layanan pemesanan dan penyewaan kami yang lancar. Temukan Harta Karun Jawa Timur: Pemesanan Tiket Mudah, Penyewaan Perlengkapan, dan Pengalaman Tak Terlupakan!</p>
            <button className='absolute -translate-y-[200px] w-[212px] bg-E text-white font-semibold ml-16 h-11 rounded-[20px]'>Tentang Kami</button>
        </div>
    </div>
  );
}

export default Content