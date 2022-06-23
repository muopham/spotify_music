import React, {useContext} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import Avatar from '../avatar.jpg'
import {Songs} from './Context'
const Header = () => {

    const {song} = useContext(Songs)
  return (
    <div className="bg-gradient-to-b from-neutral-400 to-neutral-600 h-[350px] py-4 px-7 shadow-sm">
        <div className="flex justify-end text-white">
            <button className="bg-transparent hover:bg-black px-4 py-1 border-2 border-white rounded-full mr-10">Nâng cấp</button>
            <div className="bg-slate-800 border-2 border-black rounded-3xl flex overflow-hidden cursor-pointer">
                <img src={Avatar} alt="" className="rounded-full ring-2 ring-black w-7 h-7"/>
                <p className="px-2 pt-[3px] font-semibold">Annh</p>
                <AiFillCaretDown size={20} className="pt-2"/>
            </div>
        </div>
        <div className="flex my-6">
            <div>
                <img src={song.links.images[0].url} alt="" className="w-[250px] h-[250px]"/>
            </div>
            <div className="text-white ml-7">
                <p className="uppercase font-bold">Playlist</p>
                <p className="font-bold text-5xl my-10">{song.name}</p>
                <p className="text-neutral-300">{song.author}</p>

            </div>
        </div>
    </div>
  )
}

export default Header