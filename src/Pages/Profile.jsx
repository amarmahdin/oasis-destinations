import React from 'react'
import meksico from '../Assets/meksico.png'
import pr from '../Assets/pr.png'
import pro from '../Assets/pro.png'

function Profile() {
  return (
    <div>
        <img src={meksico} alt="" className='w-[100%] h-auto'/>
        <div className='w-[1106px] h-[252px] -translate-y-[1020px] ml-[280px]'>
            <img src={pr} alt="" className='w-[100%] rounded-xl'/>
        </div>
        <div className='w-[1106px] h-[292px] -translate-y-[1020px] ml-[280px] bg-white'>
        <img src={pro} alt="" className='rounded-[200px] w-[200px] h-[200px] border-4 -translate-y-32 ml-[470px]'/>
        <h1 className='text-[35px] font-medium text-gray-500 -translate-y-32 ml-[450px]'>Mahapati Tech</h1>
        <p className='text-gray-600 -translate-y-32 ml-[435px]'>Selalu Siap Menjelajahi Tempat Baru</p>
        <h1 className='text-[40px] text-gray-500 -translate-y-28 ml-[380px]'>19,5 K</h1>
        <h1 className='text-[40px] text-gray-500 -translate-y-[170px] ml-[580px]'>5</h1>
        <h1 className='text-[40px] text-gray-500 -translate-y-[230px] ml-[700px]'>35</h1>
        </div>
    </div>
  )
}

export default Profile