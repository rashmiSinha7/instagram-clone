import {useEffect} from 'react';
import './App.css'
import axios from 'axios';

function App() {

  useEffect(()=>{
    axios.get('/api/users').then((res)=>{
      console.log(res.data)
    })
    
  },[])


  return (
    <>
  <div className='text-3xl font-bold underline'> Hiii</div>

    </>
  )
}

export default App
