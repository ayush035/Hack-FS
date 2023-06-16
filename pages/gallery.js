import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
<>
<Navbar/>

<div className='text-3xl my-40 mx-80 text-gray-500  font-mono font-semibold'>
   You will see all the NFTs uploaded by creators here.
</div>
<Footer/>
</>
    )
}