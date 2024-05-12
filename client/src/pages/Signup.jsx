import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semiboldmy-7">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3rounded-lg" />
        <input type="text" placeholder="Email" id="email" className="bg-slate-100 p-3rounded-lg" />
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3rounded-lg" />
        <button className="bg-slate-700 text-white">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
