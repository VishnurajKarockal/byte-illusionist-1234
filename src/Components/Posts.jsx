import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../Redux/Action';
import { url } from '../Resources';
import Post from './Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    fetchPosts();

    // Start a timer to periodically fetch updated posts
    const intervalId = setInterval(fetchPosts, 5000); // Fetch every 5 seconds (adjust as needed)
    setTimer(intervalId);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [dispatch]);

  const fetchPosts = () => {
    dispatch(fetchPostsRequest());
    fetch(`${url}/posts`)
      .then(response => response.json())
      .then(posts => dispatch(fetchPostsSuccess(posts)))
      .catch(error => dispatch(fetchPostsFailure(error)));
  };

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
