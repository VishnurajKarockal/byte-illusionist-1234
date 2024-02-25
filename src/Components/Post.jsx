import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentsSuccess, addCommentSuccess, updatePostLikes } from '../Redux/Action';
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from '@heroicons/react/outline';
import { url } from '../Resources';

const Post = ({ id, name, message, postImage, image, timestamp}) => {
  
  const dispatch = useDispatch();
  
  const comments = useSelector(state => {
    const post = state.posts.posts.find(post => post.id === id);
    return post && post.comments ? post.comments : [];
  });
  
  const likes = useSelector(state => {
    const post = state.posts.posts.find(post => post.id === id);
    return post ? post.likes : 0;
  });

//   console.log(comments);
//   console.log(likes);
  
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [liked, setLiked] = useState(false);
  // const commentIdCounter = useRef(1);

  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Fetch likes and comments on component mount
  // useEffect(() => {
  //   fetch(`${url}/posts/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(fetchCommentsSuccess(data.comments));
  //       dispatch(updatePostLikes({ id, likes: data.likes }));
  //     })
  //     .catch(error => console.error('Error fetching likes and comments:', error));
  // }, [dispatch, id]);

  // Handle like button click
  const handleLike = () => {
    const newLikes = liked ? likes - 1 : likes + 1;
    setLiked(!liked);

    // Update likes on the server
    fetch(`${url}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then(response => response.json())
      .then(data => dispatch(updatePostLikes({ id, likes: data.likes })))
      .catch(error => console.error('Error updating likes:', error));
  };
  
  // Handle comment button click
  const handleComment = () => {
    setShowComments(true);
  };

  // Handle adding a new comment
  // const addComment = async () => {
  //   try {
  //     const response = await fetch(`${url}/posts/${id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         commentId: commentIdCounter.current++,
  //         commentedBy: name,
  //         userImage: image,
  //         data: commentInput,
  //       }),
  //     });
  //     if (response.ok) {
  //       const newComment = await response.json();
  //       dispatch(addCommentSuccess(newComment));
  //       setCommentInput('');
  //     } else {
  //       console.error('Failed to add comment');
  //     }
  //   } catch (error) {
  //     console.error('Error adding comment:', error);
  //   }
  // };
  

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-full" src={image} alt="" />
          <div>
            <p>{name}</p>
            <p className="text-x5 text-gray-400">{new Date(timestamp).toLocaleString()}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <img className="w-full h-full object-cover" src={postImage} alt="" />
        </div>
      )}

      {(likes > 0 || (comments && comments.length > 0)) && (<div className='flex justify-between p-3 bg-white border-t shadow-sm'>
        <div className='flex'>
            <div className="rounded-full bg-blue-500 p-1">
                <ThumbUpIcon className="text-white h-6" />
            </div>
            <div className='ml-2'>
            <p>{likes} <span>Likes</span></p>
            </div>
        </div>

        <div className='flex'>
            <div className='mr-2'>
                <p>{comments && comments.length} <span>Comments</span></p>
            </div>
            
            <div className="rounded-full bg-gray-500 p-1">
                <ChatAltIcon className="text-white h-6" />
            </div>
        </div>

      </div>)}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className={`h-6 cursor-pointer ${liked ? 'text-blue-500 animate-pulse' : ''}`} />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none" onClick={handleComment}>
          <ChatAltIcon className="h-6 cursor-pointer" />
          <p className="text-xs sm:text-base"> Comments</p> {/* Ensure newComments is used */}
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-6" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>

      {showComments && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Comments</h2>
              <button onClick={() => setShowComments(false)}>&times;</button>
            </div>
            <div className="overflow-y-auto max-h-60">
              {comments.map(comment => (
                <div key={comment.id} className="flex items-center mb-2">
                  <img className="w-8 h-8 rounded-full mr-2" src={comment.userImage} alt="" />
                  <div className='flex flex-col'>
                    <p>{comment.commentedBy}</p>
                    <div>
                        <p className='text-zinc-900'>{comment.data}</p>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                className="border border-gray-300 rounded-md flex-grow p-2 mr-2"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={e => setCommentInput(e.target.value)}
              />
              <button className="bg-blue-500 text-white rounded-md px-4 py-2">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

        {showPreview && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Image Preview</h2>
                <button onClick={togglePreview}>&times;</button>
                </div>
                <img className="max-h-screen max-w-full" src={postImage} alt="Preview" />
            </div>
            </div>
        )}
      
    </div>
  );
};

export default Post;

