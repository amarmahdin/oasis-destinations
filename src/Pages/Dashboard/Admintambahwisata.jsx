import React from 'react'

function Admintambahwisata() {
  return (
    <div>
        <div className='w-full h-[60px] bg-[#27738E]'>
            <h1 className='text-center text-white py-4 font-semibold'>Tambah Wisata</h1>
        </div>
        <div className='flex mx-40'>
            <div className='w-[500px] h-[726px] ml-10 mt-10'>
                <h1>FOTO</h1>
                <div className='w-[243px] h-[203px] border-2 rounded-md mt-2'>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" className='ml-12 mt-12' width="125" height="100" viewBox="0 0 125 100" fill="none"><g clip-path="url(#clip0_380_2259)">
    <path d="M29.4167 75C27.0174 75 25.0156 74.3584 23.4115 73.075C21.8073 71.7917 21.0035 70.1889 21 68.2667V23.4C21 21.4806 21.8038 19.8792 23.4115 18.5959C25.0191 17.3125 27.0208 16.6695 29.4167 16.6667H44.8177L51.9323 10.4792C52.6962 9.81808 53.6215 9.29586 54.7083 8.91253C55.7882 8.52642 56.9219 8.33336 58.1094 8.33336H78.8906C79.6302 8.33336 80.25 8.53336 80.75 8.93336C81.25 9.33336 81.5 9.8292 81.5 10.4209C81.5 11.0125 81.25 11.507 80.75 11.9042C80.25 12.3014 79.6319 12.5 78.8958 12.5H56.7083L47.1042 20.8334H29.4167C28.4792 20.8334 27.7101 21.0736 27.1094 21.5542C26.5087 22.0347 26.2083 22.65 26.2083 23.4V68.2709C26.2083 69.0181 26.5087 69.632 27.1094 70.1125C27.7101 70.5931 28.4792 70.8334 29.4167 70.8334H106.339C107.273 70.8334 108.04 70.5931 108.641 70.1125C109.241 69.632 109.542 69.0167 109.542 68.2667V37.0167C109.542 36.4278 109.792 35.9334 110.292 35.5334C110.792 35.1334 111.411 34.9334 112.151 34.9334C112.891 34.9334 113.509 35.1334 114.005 35.5334C114.502 35.9334 114.75 36.4278 114.75 37.0167V68.2667C114.75 70.1861 113.946 71.7875 112.339 73.0709C110.731 74.3542 108.731 74.9973 106.339 75H29.4167ZM109.542 12.5H101.729C100.99 12.5 100.372 12.3 99.875 11.9C99.3785 11.5 99.1285 11.0042 99.125 10.4125C99.1215 9.82086 99.3715 9.32642 99.875 8.9292C100.378 8.53197 100.997 8.33336 101.729 8.33336H109.542V2.08336C109.542 1.4917 109.792 0.997251 110.292 0.600029C110.792 0.202807 111.411 0.00280632 112.151 2.85388e-05C112.891 -0.00274924 113.509 0.197251 114.005 0.600029C114.502 1.00281 114.75 1.49725 114.75 2.08336V8.33336H122.562C123.302 8.33336 123.92 8.53336 124.417 8.93336C124.913 9.33336 125.163 9.8292 125.167 10.4209C125.17 11.0125 124.92 11.507 124.417 11.9042C123.913 12.3014 123.295 12.5 122.562 12.5H114.75V18.75C114.75 19.3417 114.5 19.8361 114 20.2334C113.5 20.6306 112.88 20.8306 112.141 20.8334C111.401 20.8361 110.783 20.6361 110.286 20.2334C109.79 19.8306 109.542 19.3361 109.542 18.75V12.5ZM67.875 61.375C73.316 61.375 77.9149 59.8736 81.6719 56.8709C85.4288 53.8681 87.3073 50.1889 87.3073 45.8334C87.3073 41.4778 85.4288 37.7986 81.6719 34.7959C77.9149 31.7931 73.316 30.2903 67.875 30.2875C62.434 30.2847 57.8351 31.7875 54.0781 34.7959C50.3212 37.8042 48.4427 41.4834 48.4427 45.8334C48.4427 50.1834 50.3212 53.8625 54.0781 56.8709C57.8351 59.8792 62.434 61.382 67.875 61.3792M67.875 57.2125C63.8299 57.2125 60.4479 56.125 57.7292 53.95C55.0104 51.775 53.651 49.0695 53.651 45.8334C53.651 42.5972 55.0104 39.8917 57.7292 37.7167C60.4479 35.5417 63.8299 34.4542 67.875 34.4542C71.9201 34.4542 75.3021 35.5417 78.0208 37.7167C80.7396 39.8917 82.099 42.5972 82.099 45.8334C82.099 49.0695 80.7396 51.775 78.0208 53.95C75.3021 56.125 71.9201 57.2125 67.875 57.2125Z" fill="#919191"/></g>
  <defs>
    <clipPath id="clip0_380_2259">
      <rect width="125" height="100" fill="white"/>
    </clipPath>
  </defs>
</svg></a>
                </div>
            </div>
            <div className='mx-20 my-10'>
                <form action="">
                <div>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Nama Wisata</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Nama Wisata' required />
                </div>
                <div className='my-3'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Kategori Wisata</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Kategori Wisata' required />
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" className='absolute -translate-y-6 translate-x-[600px]' width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#919191"/>
</svg></a>
                </div>
                <div>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Jam Operasional</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Jam Operasional' required />
                </div>
                <div className='my-3'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Lokasi</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Lokasi Wisata' required />
                </div>
                <div className='my-3'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Harga Tiket Masuk</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Harga Tiket Masuk' required />
                </div>
                <div className='my-3'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Fasilitas</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Fasilitas' required />
                </div>
                <div className='my-3'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Alamat Lengkap</label>
                <input type="text" id='name' name='name' className='w-[650px] px-2  border-2  rounded-md' placeholder='Alamat Lengkap' required />
                </div>
                <div className='my-3 w-[650px]'>
                <label htmlFor="name" className='block text-[#464E5F] mb-1'>Kordinat Wisata</label>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5946584457165!2d114.34858477456936!3d-8.729983589040996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3938d8110b8d7%3A0xa364f95e85564443!2sPantai%20Plengkung%2FG-Land!5e0!3m2!1sid!2sid!4v1717406096102!5m2!1sid!2sid"
            width="100%"
            height="104"
            allowFullScreen
            loading="lazy"
            className=""
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
                </div>
                <div className='float-end mt-4'>
                    <button className='border-2 rounded-lg bg-blue-200 px-1 mr-4'>Simpan</button>
                    <button className='border-2 rounded-lg px-1'>Batal</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admintambahwisata