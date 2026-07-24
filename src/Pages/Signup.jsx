import { Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

function Signup() {
  return (
    <AuthLayout mode="signup">
      <h1 className="text-center text-3xl font-bold text-E md:text-[40px]">Membuat Akun</h1>
      <p className="mt-2 text-center text-gray-400">Gunakan akun email anda:</p>
      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          className="h-12 w-full rounded-md border-2 border-E px-4 outline-none"
          placeholder="Nama"
          required
        />
        <input
          type="text"
          name="nik"
          className="h-12 w-full rounded-md border-2 border-E px-4 outline-none"
          placeholder="Nik"
          required
        />
        <input
          type="text"
          name="no"
          className="h-12 w-full rounded-md border-2 border-E px-4 outline-none"
          placeholder="No. Telp"
          required
        />
        <input
          type="email"
          name="email"
          className="h-12 w-full rounded-md border-2 border-E px-4 outline-none"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="h-12 w-full rounded-md border-2 border-E px-4 outline-none"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="mx-auto mt-4 block w-[180px] rounded-[20px] border-2 border-E bg-E py-2 text-white"
        >
          Daftar
        </button>
      </form>
      <p className="mt-6 text-center text-E md:hidden">
        Sudah punya akun?{' '}
        <Link to="/Login" className="font-semibold underline">
          Masuk
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Signup
