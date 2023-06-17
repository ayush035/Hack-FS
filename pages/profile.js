import React, { useState, useReducer } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Web3Storage } from 'web3.storage'
import Logo from '../public/Logo.png'
import pic from '../public/pic.jpg'
import a from '../public/a.jpg'
import b from '../public/b.jpg'
import c from '../public/c.jpg'
import e from '../public/e.jpg'
import f from '../public/f.jpg'
import g from '../public/g.jpg'
import h from '../public/h.jpg'
import i from '../public/i.jpg'
import Footer from '../components/Footer'





export default function profile()   
{
    const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
  const [token, setToken] = useState('')
    const Web_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUxODdDYTU3ZWU1MEEwOWZmOUI2NDAzMDRiQTlDNEZBOTE3MjlDM0YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQ3NzU2NjQ4MjYsIm5hbWUiOiJBeXVzaCJ9.rR03Th49YPmOVoy8n8teXTTImO1P5wz4BxAFDFAb3wM'
    const client = new Web3Storage({ token: Web_STORAGE_TOKEN })

    return (
     <>
  <Navbar/>

  <div className=' flex justify-center'>
    <div className=' text-3xl font-mono font-semibold text-black my-6'>
        Your Posts
    </div>
  </div>
  <div className='flex'>
  <div className='grid grid-cols-4 gap-2 '>
  <div className=' bg-gray-300 text-black mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer ">
                    <a href='https://bafybeibaui4mmonz3nwy6gn6v6b5bgyg4fvugnu3a3zckvnuh6ytii6tza.ipfs.dweb.link/c.jpg'>
                    <Image src={c} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://dweb.link/ipfs/bafybeibaui4mmonz3nwy6gn6v6b5bgyg4fvugnu3a3zckvnuh6ytii6tza'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeie6gccdkxzbjw4frpgivpzzqb7hmxsbyw7y54zhir2o53yqe36xna.ipfs.dweb.link/a.jpg'>
                    <Image src={a} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://dweb.link/ipfs/bafybeie6gccdkxzbjw4frpgivpzzqb7hmxsbyw7y54zhir2o53yqe36xna'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400'>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeid255isfmzc5lfof7ylhfdvaonwo7wehcpoe7ac7qikbw3lo7beta.ipfs.dweb.link/e.jpg'>
                    <Image src={e} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeid255isfmzc5lfof7ylhfdvaonwo7wehcpoe7ac7qikbw3lo7beta.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeihqmu4d6vamf5zwiner7hqahi7fn5bbhaappyhguz5wq4hynivxcm.ipfs.dweb.link/b.jpg'>
                    <Image src={b} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeib5daahpvejlknp2gsqr6uesoidzqydblmze7imuzdq7mufz7st3m.ipfs.dweb.link/f.jpg'>
                    <Image src={f} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeib5daahpvejlknp2gsqr6uesoidzqydblmze7imuzdq7mufz7st3m.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeihvbb5tuy543vj33ccsquvla77vunpk2rnmpmiwfwz3l5tpeo737y.ipfs.dweb.link/g.jpg'>
                    <Image src={g} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeihvbb5tuy543vj33ccsquvla77vunpk2rnmpmiwfwz3l5tpeo737y.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeifhtquk6ymdxu4cbkrya6zqpx55gqlp6yts6yrfiwk5qnxhyasioq.ipfs.dweb.link/h.jpg'>
                    <Image src={h} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeifhtquk6ymdxu4cbkrya6zqpx55gqlp6yts6yrfiwk5qnxhyasioq.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-300 text-white mx-10 my-2 rounded-xl hover:bg-slate-400 '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeic3cgzlquj442qaerszk4m3w7bzl4o7pqg43lsta65qbolo35yoze.ipfs.dweb.link/i.jpg'>
                    <Image src={i} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-black font-mono my-2'>
                        <a href='https://bafybeic3cgzlquj442qaerszk4m3w7bzl4o7pqg43lsta65qbolo35yoze.ipfs.dweb.link'>
                        View on IPFS
                        </a>
                    </div>
                    </div>
                    </div>


                    



    </div>
  </div>
  <Footer/>
  </>
    )
}