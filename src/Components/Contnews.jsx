import garjuno from '../Assets/garjuno.png'
import bri1 from '../Assets/bri1.png'

function Contnews() {
  return (
    <div className="space-y-16 px-6 py-32 md:px-20 lg:px-40">
      <article className="mx-auto flex w-full max-w-[1200px] flex-col overflow-hidden rounded-[24px] border-2 md:flex-row">
        <div className="flex-1 px-8 py-10 md:max-w-[450px] md:px-14">
          <h1 className="text-2xl font-semibold md:text-[33px]">
            Keajaiban Alam di Puncak Gunung Semeru: Pesona Matahari Terbit yang Memukau
          </h1>
          <p className="py-2">
            Dengan pemandangan yang spektakuler dan udara yang segar, momen ini menjadi magnet bagi
            para pendaki dan pecinta alam untuk menikmati keajaiban alam yang luar biasa. Dari sinar
            matahari yang memancar hingga langit yang berubah warna, pengalaman menyaksikan matahari
            terbit di Gunung Semeru akan meninggalkan kenangan yang tak terlupakan bagi setiap
            pengunjung. Jangan lewatkan kesempatan untuk merasakan pesona matahari terbit di puncak
            Gunung Semeru dan biarkan diri Anda terpesona oleh keindahan alam yang memukau ini.
          </p>
        </div>
        <div className="min-h-[280px] flex-1 md:min-h-[613px]">
          <img src={garjuno} alt="Gunung Semeru" className="h-full w-full object-cover md:rounded-r-[24px]" />
        </div>
      </article>

      <section className="mx-auto w-full max-w-[1305px] rounded-3xl border-2 px-4 py-8 md:px-12">
        <h2 className="text-center text-2xl font-semibold md:text-[33px]">Berita Pilihan</h2>
        <article className="mt-8 flex w-full flex-col overflow-hidden rounded-3xl border-2 md:flex-row">
          <img
            src={bri1}
            alt=""
            className="h-48 w-full object-cover md:h-auto md:w-[320px] md:rounded-l-3xl"
          />
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold md:text-[23px]">
              Harga tiket masuk terjangkau membuat pengunjung tertarik untuk mengunjungi wisata
            </h3>
            <p className="mt-3 max-w-[800px]">
              Air Terjun Coban Rondo, merupakan salah satu sebuah air terjun yang terdapat di Jawa
              Timur tepatnya di Kota Malang ini memiliki jumlah pengunjung yang selalu konsisten.
              Pada setiap minggunya, total pengunjung yang datang hampir tidak pernah kurang dari
              100 orang. Hal tersebut ditunjang dengan harga tiket masuk yang murah disertai dengan
              akses menuju wisata yang mudah untuk dikunjungi oleh para wisatawan.
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Contnews
