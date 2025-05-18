import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side image */}
      <div className="w-1/2 h-[1200px] bg-white flex items-center justify-center relative pt-10">
        <img
          src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" // Make sure this image exists in your public folder
          alt="Banner"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Right side form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-sm w-full px-6">
          <h2 className="text-2xl font-bold mb-1">Login / Signup</h2>
          <p className="text-gray-600 text-sm mb-6">
            Join us now to be a part of Bewakoof® family.
          </p>

          <div className="mb-4">
            <div className="flex items-center border rounded px-3 py-2">
              <span className="mr-2">🇮🇳 +91</span>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="outline-none flex-1"
              />
            </div>
          </div>

          <button
            className="w-full bg-gray-200 text-gray-700 py-2 rounded font-semibold mb-6"
          >
            CONTINUE
          </button>

          <div className="flex items-center justify-between mb-6">
            <hr className="w-1/3" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="w-1/3" />
          </div>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 border py-2 rounded flex items-center justify-center gap-2">
              <img src="https://img.icons8.com/color/16/google-logo.png" alt="google" />
              Google
            </button>
            <button className="flex-1 border py-2 rounded flex items-center justify-center gap-2">
              <img src="https://img.icons8.com/color/16/facebook-new.png" alt="fb" />
              Facebook
            </button>
          </div>

          <p className="text-xs text-center text-gray-500">
            By creating an account or logging in, you agree with Bewakoof's{' '}
            <a href="#" className="text-blue-600 underline">T&C</a> and{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
