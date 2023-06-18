import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from "next/link";
import Image from 'next/image'
import a from '../public/a.jpg'
import b from '../public/b.jpg'
import c from '../public/c.jpg'
import e from '../public/e.jpg'
import f from '../public/f.jpg'
import g from '../public/g.jpg'
import h from '../public/h.jpg'
import i from '../public/i.jpg'
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";


export default function Home() {
    // const { data: contract } = useContract("0x99779C797B0Af4355c16DF32D6E2B0522C264035");
    // const { mutateAsync, isLoading, error } = useContractWrite(
    //     contract,
    //     "donate",
    //   );  
    return (
<>
<Navbar/>
<div className='my-10'>
<div className='flex'>
  <div className='grid grid-cols-4 gap-2 '>
  <div className=' bg-gray-300 text-black mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer ">
                    <Link href='/fund'>
                    <Image src={c} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://dweb.link/ipfs/bafybeibaui4mmonz3nwy6gn6v6b5bgyg4fvugnu3a3zckvnuh6ytii6tza'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link  href='/fund2'>
                    <Image src={a} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://dweb.link/ipfs/bafybeie6gccdkxzbjw4frpgivpzzqb7hmxsbyw7y54zhir2o53yqe36xna'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400'>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund3'>
                    <Image src={e} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeid255isfmzc5lfof7ylhfdvaonwo7wehcpoe7ac7qikbw3lo7beta.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund4'>
                    <Image src={b} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund5'>
                    <Image src={f} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeib5daahpvejlknp2gsqr6uesoidzqydblmze7imuzdq7mufz7st3m.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund6'>
                    <Image src={g} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeihvbb5tuy543vj33ccsquvla77vunpk2rnmpmiwfwz3l5tpeo737y.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund7'>
                    <Image src={h} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeifhtquk6ymdxu4cbkrya6zqpx55gqlp6yts6yrfiwk5qnxhyasioq.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <Link href='/fund1'>
                    <Image src={i} 
                    alt='' height="260px" width='400px'>
                    </Image></Link>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeic3cgzlquj442qaerszk4m3w7bzl4o7pqg43lsta65qbolo35yoze.ipfs.dweb.link'>
                        By 0xayushh.eth
                        </a>
                    </div>
                    </div>
                    </div>


                    



    </div>
  </div>
</div>

{/* <Web3Button
      contractAddress="0x99779C797B0Af4355c16DF32D6E2B0522C264035"
      action={async (contract) => contract.call("donate")}
    >
Donate    </Web3Button> */}

<Footer/>
</>
    )
}