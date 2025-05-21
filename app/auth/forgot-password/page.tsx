    import Image from 'next/image';
    import Link from 'next/link';

    export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex bg-gray-100">
        {/* Left Side - Forgot Password Form */}
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
                Forgot Password
                </h2>
                <p className="text-sm text-gray-500 text-center">
                Enter your email to receive password reset instructions
                </p>
            </div>

            <form className="space-y-4">
                <input
                type="email"
                placeholder="Your Gmail"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
                >
                Send Reset Link
                </button>
            </form>

            <div className="text-center text-sm text-gray-600">
                Remembered your password?{' '}
                <Link href="/auth/Login" className="text-green-700 hover:underline">
                Login here
                </Link>
            </div>
            </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex w-1/2 bg-green-900 items-center justify-center p-8">
            <Image
            src="/assets/amico.png" // Ganti dengan ilustrasi yang sesuai jika ada
            alt="Forgot Password Illustration"
            width={500}
            height={500}
            className="rounded-xl drop-shadow-2xl"
            />
        </div>
        </div>
    );
    }
