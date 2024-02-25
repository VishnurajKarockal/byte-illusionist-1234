import {EmojiHappyIcon} from '@heroicons/react/outline';
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPostRequest, sendPostSuccess, sendPostFailure } from '../Redux/Action';
import {url} from '../Resources';

const InputBox = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState("");
 // State variable to store the user object
//   const loggedInUserId = useSelector(state => state.auth.userId); // Assuming userId is stored in auth slice

//   useEffect(() => {
//     // Fetch user data when component mounts
//     fetch(`${url}/users/${loggedInUserId}`)
//       .then(response => response.json())
//       .then(userData => {
//         // Store the fetched user object in state
//         setUser(userData);
//         // Set the image to post
//         setImageToPost(userData.image);
//       })
//       .catch(error => console.error('Error fetching user data:', error));
//   }, [loggedInUserId]);

//   const shortenUrl = async () => {
//     try {
//       const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(imageToPost)}`);
//       if (response.ok) {
//         const data = await response.text();
//         setShortUrl(data);
//       } else {
//         console.error('Error Shortening');
//       }
//     } catch (error) {
//       console.error('Error Shortening');
//     }
//   };

// const shortenUrl = async (longUrl) => {
//     try {
//       const response = await fetch(
//         `https://api.shrtco.de/v2/shorten?url=${longUrl}`
//       )
//       const data = await response.json()
//       setShortUrl(data.result.full_short_link);
//     } catch (e) {
//       alert(e);
//     }
// };

// const hashString = str => {
//     let hash = 0;
//     if (str.length === 0) {
//       return hash;
//     }
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charCodeAt(i);
//       hash = ((hash << 5) - hash) + char;
//       hash = hash & hash; // Convert to 32bit integer
//     }
//     return hash.toString(36).slice(1); // Convert to base36 string and remove leading '0'
//   };
  
//   const shortenUrl = longUrl => {
//     const shortened = hashString(longUrl);
//     return `/${shortened}`; // Remove the domain part
//   };
  
//   // Example usage
//   const longUrl = imageToPost;
//   const shortUrl = shortenUrl(longUrl);
//   console.log('Shortened URL:', shortUrl);
//   console.log(typeof(imageToPost));

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    dispatch(sendPostRequest());

    fetch(`${url}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: inputRef.current.value,
        name: "Revanth", // Fetch from login component
        email: "rev@gmail.com", // Fetch from login component
        image: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png", // Fetch from login component
        postImage: imageToPost, // Initially set to null for file selection
        timestamp: Date.now(), // Set during API call
        likes : 0,
        comments : []
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send post');
        }
        dispatch(sendPostSuccess());
        inputRef.current.value = ''; // Clear input field after successful post
        removeImage();
      })
      .catch(error => {
        dispatch(sendPostFailure(error.message));
      });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this post',
//         text: data.description,
//         url: window.location.href,
//       })
//       .catch((error) => console.log('Error sharing', error));
//     } else {
//       console.log('Web Share API is not supported in your browser.');
//     }
//   };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOWS60zE0_pk40_4fF40IWkb7nyLRRml0mzMgeY2GcSNXT32ZMhqyLhWEkWpXfggrLcI&usqp=CAU'
          alt="User Avatar"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder="What's on your mind, Revanth"
          />
          <button hidden type="submit" onClick={sendPost}>Submit</button>
        </form>

        {imageToPost && (
          <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
            <img className='h-10 object-contain' src={imageToPost} alt="Selected Image" />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className='text-xs sm:text-sm xl:text-base'>
            Live Video
          </p>
        </div>
        <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
          <CameraIcon className="h-7 text-green-400" />
          <p className='text-xs sm:text-sm xl:text-base'>
            Photo/Video
          </p>
          <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
        </div>

        <div className='inputIcon'>
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className='text-xs sm:text-sm'>
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
