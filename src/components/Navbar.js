import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className='bg-pink-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
    <section>
    <div className="container flex flex-wrap items-center justify-end mx-auto text-2xl">
      <Link className ="px-8 text-white font-semibold" to="/">Dashboard</Link>
      <Link className="text-white font-semibold" to="/posts">Posts</Link>
      </div>
    </section>
  </nav>
)
