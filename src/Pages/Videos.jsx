import React, { useState, useEffect } from 'react';
import axios from 'axios';
import share from "../Styles/Images/share.png";
import like from "../Styles/Images/like.png";
import comment from "../Styles/Images/comment.png";
import '../Styles/VideoSection.css';
import { Button } from '@chakra-ui/react';
import { url } from '../Resources.js'
import video from "../Styles/Videos/video1.mp4";



export const Videos = () => {
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState([]);

  useEffect(() => {
    axios.get(`${url}/videos`)
      .then(response => {
        setData(response.data)
        setLikes(response.data.like)
        console.log(setData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])

  const handleLike = (index) => {
    const newData = [...data];
    newData[index].like += 1;
    setData(newData);
    axios.post(`${url}/videos/${data[index].id}/like`)
      .then(response => {
        console.log('Likes count updated successfully');
        setData(newData);
      })
      .catch(error => {
        console.error('Error updating likes count:', error);
        newData[index].like -= 1;
        setData(newData);
      });
  };

  const handleComment = (index) => {
    if (newComment !== '') {
      const newData = [...data];
      newData[index].comments.push(newComment);

      axios.post(`${url}/videos/${data[index].id}comments`, { text: newComment })
        .then(response => {
          console.log('Comment added successfully');
          setData(newData);
          setNewComment('');
        })
        .catch(error => {
          console.error('Error adding comment:', error);
          newData[index].comments.pop();
          setData(newData);
        });
    }
  };

  const toggleComments = (index) => {
    const newShowComments = [...showComments];
    newShowComments[index] = !newShowComments[index];
    setShowComments(newShowComments);
  };

  const handleShare = (index) => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this post',
        text: data[index].description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };


  console.log(data)

  return <>
    <div className='MainContainer'>
      {data.map((data, index) => (
        <div key={index} className="video-item" >
          <div className='username'>
            <img style={{ borderRadius: "50%", width: "30px", height: "30px" }} src={data.profilepicture} alt="image" />
            <h3 style={{fontSize:"20px"}}>{data.username}</h3>
          </div>
          <div className="description">
            <p >{data.description}</p>
          </div>
          <video className='videotag' controls>
            <source src={video} type='video/mp4' />
          </video>
          <div className="video-stats" style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }}>
            <Button className='btn' onClick={() => handleLike(index)}><img style={{ width: "30px", height: "30px" }} src={like} alt="share" /> Likes: {data.like}</Button>
            <Button className='btn' onClick={() => toggleComments(index)}><img style={{ width: "30px", height: "30px" }} src={comment} alt="share" /> Comments{data.comments} </Button>
            {showComments[index] && (
            <div>
              {data.comments.map((comment, i) => <p key={i}>{comment}</p>)}
              <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment..." />
              <Button className='btn' onClick={() => handleComment(index)}>Post Comment</Button>
            </div>
          )}
            <Button className='btn' onClick={() => handleShare(index)}><img style={{ width: "30px", height: "30px" }} src={share} alt="share" />Share</Button>
          </div>
        </div>

      ))}
    </div>
  </>
}

export default Videos;