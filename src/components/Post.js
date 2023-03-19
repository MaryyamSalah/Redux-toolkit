import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ post, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2 className='text-2xl font-extrabold dark:text-white'>{post.title}</h2>
    <p className='my-4 text-lg text-gray-500'>{excerpt ? post.body.substring(0, 100) : post.body}</p>

    {excerpt && (
      <Link to={`/posts/${post.id}`} className="button inline-block rounded bg-pink-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        View Post
      </Link>
    )}
  </article>
)