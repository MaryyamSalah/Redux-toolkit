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
    <section>
        <h1>Posts</h1>
        {renderPosts()}
    </section>

)
}
export default PostsPage