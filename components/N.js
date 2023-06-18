import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { formatsByName, formatsByCoinType } from '@ensdomains/address-encoder';
import { Alchemy, Network } from "alchemy-sdk";

export default function Navbar() {
    const config = {
        apiKey: "<-- ALCHEMY APP API KEY -->",
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(config);
      
      const walletAddress = "0xC72fa67241b2Ab95776DB23Cb27A845d4290d75B"; 
      const ensContractAddress = "0xC72fa67241b2Ab95776DB23Cb27A845d4290d75B";
      const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
        contractAddresses: [ensContractAddress],
      });
      
      console.log(nfts);
    const contentHash = await resolver.getContentHash();
    const btcAddress = await resolver.getAddress(0);
    const contentHash = require('content-hash')
    const content = contentHash.decode(encoded)
    const namehash = require('eth-ens-namehash');
    const allnames = await ReverseRecords.getNames(['0x123','0x124'])
    const validNames = allnames.filter((n) => namehash.normalize(n) === n )
    
    const codec = contentHash.getCodec(encoded) // 'swarm-ns'
    codec === 'ipfs-ns' // false
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


        <div className='hover:text-black delay-50 text-md font-semibold font-mono '>
0xayushh.eth
</div>
            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }