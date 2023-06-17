import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


  
export default function Home() {
    return (
     <>
  <Navbar/>
   <div className='flex justify-center my-4 '>
      <input className="px-28 h-8 mx-2 rounded-lg  bg-gray-300 text-black" type="text" placeholder="Search by ENS/Wallet" />
</div>
<div className='flex justify-center'>
<div className='text-3xl my-20  text-gray-500  font-mono font-semibold'>
    Search to see others posts !
</div>
</div>
<Footer/>
     </>
    )
  }