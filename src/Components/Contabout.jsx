import React from 'react'
import vidabout from '../Assets/vidabout.mp4'
import blue from '../Assets/blue.png'
import shape from '../Assets/shape.png'

function Contabout() {
  return (
    
    <div className='py-10'>
        <div className='grid justify-items-stretch'>
        <div className='py-12 justify-self-center'>
        <video src={vidabout} autoPlay loop muted className='w-[1336px] rounded-[30px]'/>
        </div>
        <div className='flex'>
            <div className='w-[700px] mx-[170px]'>            
            <h1 className='text-[60px] font-bold'>Petualangan Anda</h1>
            <h1 className='text-[60px] font-bold w-[500px]'>Pakar Perjalana & Tur</h1>
            </div>
            <p className='w-[500px] my-5 -translate-x-24 text-justify text-xl'>Keselamatan selalu menjadi prioritas nomor satu untuk semua petualangan luar ruangan yang kami sediakan. Kami bangga menjadi perusahaan petualangan terkemuka di bidang pariwisata di Jawa Timur. Pelatih internal kami memiliki lebih dari 15 tahun pendidikan keselamatan dan pengalaman langsung di alam liar Indonesia.</p>
        </div>
        <div className='flex py-20'>
        <div className='w-[550px] mx-[170px]'>
            <h1 className='text-[55px] font-bold py-8'>Oasis Destination</h1>
            <p className='text-justify'>Pernahkah Anda membayangkan menjelajahi dunia dan mengalami petualangan seru? Atau Anda ingin bersantai sejenak di tempat yang asri dan tenang?</p>
            <p className='text-justify'>Oasis Destination hadir sebagai platform perjalanan yang siap menemani Anda menjelajahi dunia dan menciptakan kenangan indah. Di sini, Anda bisa menemukan berbagai destinasi menarik, mulai dari pantai eksotis hingga pegunungan yang menantang, dengan kemudahan pembelian tiket dan sewa perlengkapan lengkap. Dukungan tim yang handal siap membantu mewujudkan liburan impian Anda. Kunjungi Oasis Destination dan bersiaplah untuk petualangan tak terlupakan! Kami menawarkan platform yang mudah digunakan dan proses pemesanan yang sederhana, sehingga Anda dapat fokus pada kesenangan liburan Anda.</p>
        </div>
        <div className='-translate-x-32'>
            <img src={blue} alt="" />
        </div>
        </div>
        <div>
            <img src={shape} alt="" className='w-[100%] translate-y-10'/>
            <h1 className='absolute -translate-y-[590px] ml-16 text-[40px] font-semibold w-[600px]'>JELAJAHI CARA BERBEDA UNTUK PERJALANAN</h1>
            <p className='absolute -translate-y-[420px] w-[600px] text-justify ml-16 text-base'>Mulailah petualangan tak terlupakan di Jawa Timur dengan platform pemesanan tiket dan penyewaan perlengkapan terintegrasi kami! Jelajahi destinasi menakjubkan, benamkan diri Anda dalam pengalaman budaya yang kaya, dan ciptakan kenangan yang tak terlupakan seumur hidup.</p>
            <p className='absolute -translate-y-[320px] w-[600px] text-justify ml-16 text-base'>Jelajahi pegunungan yang megah, saksikan matahari terbit di atas kaldera, dan ciptakan kenangan tak terlupakan dengan layanan pemesanan dan penyewaan kami yang lancar. Temukan Harta Karun Jawa Timur: Pemesanan Tiket Mudah, Penyewaan Perlengkapan, dan Pengalaman Tak Terlupakan!</p>
        </div>
        </div>
    </div>
  )
}

export default Contabout