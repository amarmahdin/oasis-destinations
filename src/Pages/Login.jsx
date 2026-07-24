import { Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

function Login() {
  return (
    <AuthLayout mode="login">
      <h1 className="text-center text-3xl font-bold text-E md:text-[40px]">Masuk Ke Oasis</h1>
      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
          Masuk
        </button>
      </form>
      <Link to="#" className="mt-6 block text-center text-E underline">
        Anda lupa password?
      </Link>
      <p className="mt-6 text-center text-E md:hidden">
        Belum punya akun?{' '}
        <Link to="/Signup" className="font-semibold underline">
          Daftar
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Login
