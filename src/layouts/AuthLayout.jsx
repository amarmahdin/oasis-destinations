import { Link } from 'react-router-dom'
import rio from '../Assets/rio.png'
import rio1 from '../Assets/rio1.png'

function AuthLayout({ mode = 'login', children }) {
  const isLogin = mode === 'login'

  const panel = (
    <div className="flex w-full max-w-[539px] flex-col justify-center rounded-xl bg-white px-10 py-12 shadow-sm sm:px-16">
      {children}
    </div>
  )

  const promo = (
    <div className="relative hidden w-full max-w-[539px] overflow-hidden rounded-xl md:block">
      <img src={rio1} alt="" className="h-full min-h-[715px] w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-E">
        <h2 className="text-3xl font-bold lg:text-[40px]">
          {isLogin ? 'Selamat Datang Kembali🙌' : 'Hello, Friends!'}
        </h2>
        <p className="mt-4 max-w-sm">
          {isLogin
            ? 'Untuk tetap terhubung dengan kami, silakan login dengan akun pribadi Anda'
            : 'Silakan masukkan detail diri Anda untuk mendaftar dan menjadi bagian dari komunitas kami'}
        </p>
        <p className="mt-6 font-semibold">
          {isLogin ? 'Belum memiliki akun?' : 'Sudah memiliki akun?'}
        </p>
        <Link
          to={isLogin ? '/Signup' : '/Login'}
          className="mt-4 rounded-[20px] border-2 border-E px-8 py-2 font-bold text-E transition hover:bg-white/80"
        >
          {isLogin ? 'Daftar' : 'Masuk'}
        </Link>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen w-full">
      <img src={rio} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="flex w-full max-w-[1078px] flex-col overflow-hidden rounded-xl md:flex-row">
          {isLogin ? (
            <>
              {panel}
              {promo}
            </>
          ) : (
            <>
              {promo}
              {panel}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
