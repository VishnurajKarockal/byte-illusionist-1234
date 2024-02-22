import './App.css'
import Feed from './Components/Feed'

function App() {
  

  return (
    <>
      <div className='h-screen bg-gray-100 overflow-hidden'>
        Facebook 
        <br />
        <br />
        These is the Facebook Clone 
        <div className='flex'>
          <Feed/>
        </div>
      </div>
      
    </>
  )
}

export default App
