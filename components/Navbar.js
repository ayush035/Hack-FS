import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';



export default function Navbar() {

    return (
        
            <>
            <nav className=' flex justify-between h-12 text-black bg-white   font-bold' >
                <span className='mx-20 my-2 flex text-black text-2xl font-mono '><Link href={"/"}>ARTIFI</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        <div className='hover:text-black delay-50  text-md font-semibold font-mono '>
        
            <Link href="/gallery">Art Gallery</Link></div>
        <div className='hover:text-black delay-50  text-md font-semibold font-mono'>
        
            <Link href="/search">Search</Link></div>

            <div className='hover:text-black delay-50  text-md font-semibold font-mono'>
        
            <Link href="/post">Post</Link></div>

        <div className='hover:text-black delay-50 text-md font-semibold font-mono '>
        
            <Link href="/profile">Profile</Link></div>
              {/* <div className=' mx-2 my-2 '> */}            
        <ConnectButton/>
            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }