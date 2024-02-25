import { useSelector } from 'react-redux'
import Feed from '../Components/Feed'
import Login from './Login';

const Posts = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  console.log("aaaaaaaaaaaa", isLoggedIn);

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      {isLoggedIn ? (
        <div className='flex'>
          <Feed />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Posts;
