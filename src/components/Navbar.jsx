import React from 'react'
import Logo from '../logo.png'
import {BiHomeAlt, BiSearch, BiLibrary} from 'react-icons/bi'
import {IoIosAddCircleOutline } from 'react-icons/io'
import {BsFillHeartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="min-w-[250px] min-h-screen bg-black pl-8 fixed">
        <div className="flex pt-7 pb-10">
           <img src={Logo} alt="" className="w-11 h-11 mr-2 cursor-pointer"/>
            <p className="text-2xl text-white font-semibold pt-1">Spotify</p>
        </div>
        <nav className="text-[17px] text-stone-300 border-b-2 border-gray-800 ">
            <li className="list-none flex gap-4 my-4 hover:text-white cursor-pointer">
                <BiHomeAlt size={24}/>
                <p>Trang chủ</p>
            </li>
            <li className="list-none flex gap-4 my-4 hover:text-white cursor-pointer">
                <BiSearch size={24}/>
                <p>Tìm kiếm</p>
            </li>
            <li className="list-none flex gap-4 my-4 hover:text-white cursor-pointer">
                <BiLibrary size={24}/>
                <p>Thư viện</p>
            </li>
            <li className="list-none flex gap-4 mt-9 hover:text-white cursor-pointer">
                <IoIosAddCircleOutline size={24}/>
                <p>Tạo playlist</p>
            </li>
            <li className="list-none flex gap-4 my-4 hover:text-white cursor-pointer">
                <BsFillHeartFill size={24}/>
                <p>Bài hát đã thích</p>
            </li>
        </nav>      
    </div>
  )
}

export default Navbar