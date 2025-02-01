import {
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center text-white p-8">
      <div className="bg-white text-gray-800 shadow-xl rounded-3xl p-10 w-full max-w-md text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Your To-Do List!
        </h1>
        <p className="text-lg mb-6">
          This project was created with a focus on writing Jest tests.
        </p>
        <div className="space-y-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl shadow-xl transform transition hover:scale-105 hover:bg-indigo-700">
              Log in / Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl shadow-xl transform transition hover:scale-105 hover:bg-indigo-700" href="/dashboard">
            Go to Dashboard
          </Link>
        </SignedIn>
        </div>
      </div>
    </div>
  );
}
