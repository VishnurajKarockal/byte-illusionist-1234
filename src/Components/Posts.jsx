import { useEffect, useState } from "react";
import { url } from "../Resources";
import Post from "./Post";


const Posts = () => {

  const [realtimePosts, setRealtimePosts] = useState([]);

  useEffect(() => {
    fetch(`${url}/posts`)
      .then(response => response.json())
      .then(posts => setRealtimePosts(posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  
  return (
    <div>
      {realtimePosts?.map(post => (
        <Post
          key={post.id}
          name = {post.name}
          message= {post.message}
          email= {post.email}
          timestamp= {post.timestamp}
          image = {post.timestamp}
          postImage={post.postImage}
        />
      ))}
    </div>
  )
}

export default Posts