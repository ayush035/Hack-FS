import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import f from '../public/f.jpg'
import Image from 'next/image'


export default function Fund() {
    return(
<>
<Navbar/>
<div className="mx-20 my-10 ">
<div className='grid grid-cols-2 gap-2 '>

<Image src={f} 
                    alt='' height="600px" width='600px'>
                    </Image>
                    <div>
<div className= "mx-10 font-mono text-black text-xl font-bold">
    Owned By : 0xayushh.eth
</div>
<div className= "mx-10 my-4 font-mono text-black text-xl">
    Description : Its an authentic NFT inspired from an anime charachter based in JAPAN , named as One piece.
</div>
<div className= "mx-10 font-mono text-black text-xl font-bold">
Donate $ in Apecoin
</div>
<div>
<input className='mx-10 font-mono pb-2 text-black text-xl bg-gray-300 rounded-lg my-4' placeholder='  $ APE' />
</div>
<button className ="mx-10 font-mono text-black text-xl font-bold bg-slate-400 rounded-lg my-2 px-2 py-1">
 Donate 
   </button>
   <div className= "mx-10 font-mono text-black text-xl font-bold">
Bid $ in Apecoin to purchase NFT
</div>
   <div>
<input className='mx-10 font-mono pb-2 text-black text-xl bg-gray-300 rounded-lg my-4' placeholder='  $ APE ' />
</div>
<button className ="mx-10 font-mono text-black text-xl font-bold bg-slate-400 rounded-lg my-2 px-2 py-1">
 Bid
   </button>
   <div className= "mx-10 font-mono text-black text-xl font-bold">
Last Bid $ 
</div>
<div className= "mx-10 font-mono text-black text-xl my-2">
0 APE $ 
</div>

</div>

    </div>
</div>
</>
    )
}