import React from 'react'

const Sendmail = () => {
  return (
    <div className="bg-slate-900 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Survey Your Next Success.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Schedule a consultation with our
            licensed team.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-l-xl bg-slate-800 border-none text-white w-full max-w-sm focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-r-xl font-bold hover:bg-blue-500 transition">
              Go
            </button>
          </div>
        </div>
      </div>
  )
}

export default Sendmail