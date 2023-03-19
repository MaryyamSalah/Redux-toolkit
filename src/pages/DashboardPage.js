import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <div className='text-center my-32'>
    
    <h1 className='mt-0 mb-2 text-5xl font-medium leading-tight text-primary'>Dashboard</h1>
  
    <p className='mt-0 mb-4 text-xl font-light leading-relaxed'>This is the dashboard.</p>
   
    <Link to="/posts" className="button inline-block rounded bg-pink-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
      View Posts
    </Link>
  </div>
)

export default DashboardPage