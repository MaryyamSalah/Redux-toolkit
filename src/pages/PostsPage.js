import React ,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts,postsSelectore } from "../slices/posts";
import { Post } from "../components/Post";

    const PostsPage =()=> {
    const dispatch = useDispatch()
    const {posts, loading, hasErrors} =useSelector(postsSelectore)
    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

const renderPosts =()=>{
    if(loading) return <p>Loading....</p>
    if(hasErrors) return <p>unable to display</p>
   
        return posts.map(post => <Post key={post.id} post={post} excerpt />)
    
}
return (
    <section className=" px-8">
        <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-primary">Posts</h1>
        <div className="my-4 text-lg text-gray-500">
        {renderPosts()}
        </div>
    </section>

)
}
export default PostsPage