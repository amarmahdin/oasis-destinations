import React from 'react'
import rio from '../Assets/rio.png'
import rio1 from '../Assets/rio1.png'

function login() {
  return (
    <div className=''>
        <img src={rio} alt="" className='w-[100%] h-[1026px]'/>
        <div className='absolute -translate-y-[880px] translate-x-[300px] flex'>
        <div className='w-[539px] h-[715px] bg-white rounded-l-xl '>
            <h1 className='text-E text-[40px] font-bold mt-48 text-center'>Masuk Ke Oasis</h1>
            <form action="" className='mx-16 mt-4'>
                <input type="text" id='email' name='email' className=' w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none' placeholder='Email' required/>
                <input type="text" id='pasword' name='pasword' className=' w-[400px] h-12 px-4 py-2 border-2 border-E rounded-md outline-none mt-4' placeholder='Password' required/>
            </form>
            <button className="w-[180px] py-2 text-white border-2 border-E bg-E rounded-[20px] mt-8 ml-44">Masuk</button>
            <a href="" className='text-E underline -translate-x-44 translate-y-20 absolute'>Anda lupa password?</a>
        </div>
        <div className='w-[539px] h-[715px]'>
            <img src={rio1} alt="" className='rounded-r-xl'/>
            
            <a href="/Signup"><button className="w-[120px] py-2 text-E font-bold border-2 -translate-y-[270px] border-E rounded-[20px] mt-3 ml-52">Daftar</button></a>
            <h1 className='text-E text-[40px] font-bold mt-48 mx-24 -translate-y-[740px] text-center'>Selamat Datang Kembali🙌</h1>
            <p className='text-E mt-48 mx-24 -translate-y-[920px] text-center'>Untuk tetap terhubung dengan kami, silakan login dengan akun pribadi Anda</p>
            <p className='text-E mt-48 mx-24 -translate-y-[1090px] text-center font-semibold'>Belum memiliki akun?</p>
        </div>
        </div>
    </div>
  )
}

export default login