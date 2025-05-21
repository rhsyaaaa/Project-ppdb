    import Image from 'next/image';
    import Link from 'next/link';

    export default function LoginPage() {
    return (
        <div className="min-h-screen flex bg-gray-100">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
            <div className="max-w-md w-full space-y-6">
            <div className="flex flex-col items-center">
                <div className="flex items-center space-x-3">
                <Image src="/assets/mq.png" width={80} height={80} alt="SMK Logo" />
                <div className="text-sm text-green-900">
                    <div>Sekolah Menengah Kejuruan</div>
                    <div className="font-bold">MADINATUL QURAN</div>
                </div>
                </div>
    
                <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
                Login to Your Account
                </h2>
                <p className="text-sm text-gray-500">Select method to login</p>
            </div>
    
            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:shadow transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">Sign In with Google</span>
            </button>
    
            <div className="text-center text-gray-500 text-sm">or Login with</div>
    
            {/* Login Form */}
            <form className="space-y-4">
                <input
                type="email"
                placeholder="Gmail"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
                >
                Login
                </button>
            </form>


            </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 bg-green-900 items-center justify-center p-8">
            <Image
            src="/assets/bro.png" // Pastikan file ini ada di /public
            alt="Login Illustration"
            width={500}
            height={500}
            className="rounded-xl drop-shadow-2xl"
            />
        </div>
        </div>
    );
    }

