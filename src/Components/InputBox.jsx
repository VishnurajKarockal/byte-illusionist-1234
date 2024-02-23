import {EmojiHappyIcon} from '@heroicons/react/outline';
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendPostRequest, sendPostSuccess, sendPostFailure } from '../Redux/Action';
import {url} from '../Resources';


const InputBox = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e)=> {
        e.preventDefault();

        if(!inputRef.current.value) return;

        dispatch(sendPostRequest());

        fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
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

    const addImageToPost = (e)=> {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = ()=> {
        setImageToPost(null);
    }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
            <img
                className="rounded-full"
                src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOWS60zE0_pk40_4fF40IWkb7nyLRRml0mzMgeY2GcSNXT32ZMhqyLhWEkWpXfggrLcI&usqp=CAU'
                width={40}
                height={40}
            />
            <form className="flex flex-1">
                <input 
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    type="text"
                    ref={inputRef}
                    placeholder="what's on your mind, Revanth"
                />
                <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>

            {imageToPost && (
                <div onClick={removeImage} className='flex flex-col filter 
                hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src= {imageToPost} alt="" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>

        
        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className = "h-7 text-red-500"/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Live Video
                </p>
            </div>
            <div onClick={()=> filepickerRef.current.click()} className='inputIcon'>
                <CameraIcon className = "h-7 text-green-400"/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Photo/Video
                </p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
            </div>

            <div className='inputIcon'>
                <EmojiHappyIcon className= "h-7 text-yellow-300"/>
                <p className='text-xs sm:text-sm'>
                    Feeling/Activity
                </p>
            </div>
        </div>
    </div>
  )
}

export default InputBox