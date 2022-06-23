import React, { useContext , useState, useEffect} from 'react'
import {BsClock} from 'react-icons/bs' 
import {AiOutlineDownload} from 'react-icons/ai' 
import {Songs} from './Context'

const ListSong = () => {
    const {Data, song, handleSetSong} = useContext(Songs)

    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
      }, [song])

  return (
    <div className="px-8 py-8 bg-[#212121] text-white">
        <table className='table-fixed w-full'>
            <thead className="text-[#a4a4a4] text-left border-b-2 border-gray-600">
                <tr>
                    <th className='w-[8%]'>#</th>
                    <th>Tiêu đề</th>
                    <th className='w-[35%]'>Tác giả</th>
                    <th className='w-[8%]'><AiOutlineDownload/></th>
                </tr>
            </thead>
            <tbody>
                {Data.map((song, index) => (
                    <tr key={index} 
                        className={`hover:bg-zinc-400 hover:text-white ${idSong === song.id && 'text-[#1ed760] bg-[#5a5a5a]'}`}
                        onClick={()=> handlePlaySong(song.id)}
                        >
                        <td>{index + 1}</td>
                        <td className='flex gap-4'>
                             <img src={song.links.images[0].url} alt="" className="w-10 h-10" />
                             <p className='pt-2'>{song.name}</p>
                        </td>
                        <td>{song.author}</td>
                        <td>
                            <a href={song.url}>
                                <AiOutlineDownload/>
                            </a>
                        </td>
                    </tr>
                ))}
        </tbody>
        </table>
    </div>
  )
}

export default ListSong