import React from 'react'
import pro from '../Assets/pro.png'
import garis from '../Assets/garis.png'
import bni from '../Assets/bni.png'
import bca from '../Assets/bca.png'
import mandiri from '../Assets/mandiri.png'
import bri from '../Assets/bri.png'
import mua from '../Assets/mua.png'
import nia from '../Assets/nia.png'

function Payment() {
  return (
    <div className='w-[100%] h-[940px] bg-E'>
        <div className='w-[1285px] h-[800px] bg-[#DBE8EC] mx-[170px] translate-y-[70px] flex rounded-xl'>
            <div className='w-[664px] h-[735px] bg-white  ml-8 translate-y-8 rounded-xl'>
                <img src={pro} alt="" className='float-end w-14 rounded-[50px] mr-10 mt-7'/>
                <h1 className='text-E font-semibold float-end mt-10 mr-2'>Mahapatih Tech</h1>
                <div className='w-[100%] h-[600px] my-24 ml-9'>
                    <h1 className='text-[20px] font-semibold'>Detail Pembayaran</h1>
                    <div className='flex mt-5'>
                        <a href="" className='text-[#919191] hover:text-black'>Transfer</a>
                        <a href="" className='text-[#919191] ml-10 hover:text-black'>Kartu Kredit</a>
                        <a href="" className='text-[#919191] ml-10 hover:text-black'>Lainnya</a>
                    </div>
                    <img src={garis} alt="" className=" w-[500px] mt-3" />
                    <div className='flex'>
                        <div className='ml-5 py-3'>
                            <div className='flex mt-5'>
                            <input type="radio" />
                            <img src={bni} alt="" className='w-32'/>
                            </div>
                            <div className='flex mt-4'>
                            <input type="radio" />
                            <img src={bca} alt="" className='w-26 ml-3'/>
                            </div>
                            <div className='flex mt-1'>
                            <input type="radio" />
                            <img src={mandiri} alt="" className='ml-4 w-26'/>
                            </div>
                            <div className='flex mt-1'>
                            <input type="radio" />
                            <img src={bri} alt="" className='w-26 ml-6'/>
                            </div>
                            <div className='flex mt-4'>
                            <input type="radio" />
                            <img src={mua} alt="" className='w-36 ml-4'/>
                            </div>
                            <div className='flex mt-4'>
                            <input type="radio" />
                            <img src={nia} alt="" className='w-32 ml-5'/>
                            </div>
                        </div>
                        <div className='ml-24 py-10'>
                            <h1 className='text-[#919191]'>Nomor Rekening</h1>
                            <form action="" className='w-[252px] h-[70px] mt-1 bg-[#F5F8F9]'>
                            <input type="text" className='ml-6 my-5' placeholder='Nomor rekening kamu'/>
                            </form>
                            <h1 className='text-[#919191] mt-6'>Nominal</h1>
                            <form action="" className='w-[252px] h-[70px] mt-1 bg-[#F5F8F9]'>
                            <input type="text" className='ml-6 my-5' placeholder='Jumlah yang dibayarkan'/>
                            </form>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='w-[200px] h-[70px] border-2 text-[#919191] font-semibold rounded-lg mt-10'>Batal dan Kembali</button>
                        <button className='w-[200px] h-[70px] border-2 bg-E text-white font-semibold rounded-lg ml-16 mt-10'>Batal dan Kembali</button>
                    </div>
                </div>
            </div>
            <div className='w-[664px] h-[835px] mr-8 translate-y-8'>
                <div className='ml-12 mt-5'>
                <h1 className='text-[40px] font-semibold'>Ringkasan Pesanan</h1>
                <div className='w-[450px] h-[60px] border-2 border-black rounded-lg bg-white flex mt-10'>
                    <h1 className='text-[20px] font-semibold ml-10 mt-3'>Tiket</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-[290px] mt-[20px]' width="23" height="15" viewBox="0 0 23 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1851 0.574505C10.4955 0.20665 10.9165 0 11.3555 0C11.7944 0 12.2154 0.20665 12.5259 0.574505L21.8908 11.6746C22.1923 12.0447 22.3592 12.5404 22.3554 13.0549C22.3516 13.5693 22.1775 14.0615 21.8706 14.4253C21.5637 14.7891 21.1485 14.9955 20.7144 14.9999C20.2803 15.0044 19.8622 14.8066 19.55 14.4492L11.3555 4.73632L3.16098 14.4492C2.84876 14.8066 2.43059 15.0044 1.99654 14.9999C1.56248 14.9955 1.14727 14.7891 0.840339 14.4253C0.533405 14.0615 0.359303 13.5693 0.355531 13.0549C0.35176 12.5404 0.51862 12.0447 0.820174 11.6746L10.1851 0.574505Z" fill="black"/>
</svg>
                </div>
                <div className='flex mt-10 ml-12'>
                    <h1 className='text-[20px]'>Pantai Plengkung</h1>
                    <h1 className='text-[20px] font-semibold ml-20'>IDR 10.000</h1>
                </div>
                <h1 className='float-end mr-[160px] text-[20px] font-semibold mt-2'>x2</h1>
                <div className='w-[450px] h-[60px] border-2 border-black rounded-lg bg-white flex mt-20'>
                    <h1 className='text-[20px] font-semibold ml-10 mt-3'>Tiket</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-[290px] mt-[20px]' width="23" height="15" viewBox="0 0 23 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1851 0.574505C10.4955 0.20665 10.9165 0 11.3555 0C11.7944 0 12.2154 0.20665 12.5259 0.574505L21.8908 11.6746C22.1923 12.0447 22.3592 12.5404 22.3554 13.0549C22.3516 13.5693 22.1775 14.0615 21.8706 14.4253C21.5637 14.7891 21.1485 14.9955 20.7144 14.9999C20.2803 15.0044 19.8622 14.8066 19.55 14.4492L11.3555 4.73632L3.16098 14.4492C2.84876 14.8066 2.43059 15.0044 1.99654 14.9999C1.56248 14.9955 1.14727 14.7891 0.840339 14.4253C0.533405 14.0615 0.359303 13.5693 0.355531 13.0549C0.35176 12.5404 0.51862 12.0447 0.820174 11.6746L10.1851 0.574505Z" fill="black"/>
</svg>
                </div>
                <div className='flex mt-10 ml-12'>
                    <h1 className='text-[20px]'>Pantai Plengkung</h1>
                    <h1 className='text-[20px] font-semibold ml-20'>IDR 10.000</h1>
                </div>
                <h1 className='float-end mr-[160px] text-[20px] font-semibold mt-2'>x2</h1>
                </div>
                <div className='flex ml-12 mt-44'>
                <h1 className='text-[22px] font-semibold mt-2'>Total Pembayaran :</h1>
                <h1 className='text-[28px] font-semibold ml-24'>IDR 80.000</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment