import React from 'react'

export const Comment = ({ comment }) => (
  <aside className="comment">
    <h2 className='px-8 text-4xl font-extrabold dark:text-white'>{comment.title}</h2>
    <h3 className='px-8 text-xl font-extrabold dark:text-white'>{comment.email}</h3>
    <p className='px-8 my-4 text-lg text-gray-500'>{comment.body}</p>
  </aside>
)