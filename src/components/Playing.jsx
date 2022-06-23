import React , {useContext} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from './Context';
const Playing = () => {

    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
  return (
    <div className='fixed z-10 bottom-0 left-0 right-0 text-white'>
        <AudioPlayer src={song.url}
        showSkipControls={true} 
        showJumpControls={false} 
        layout="stacked-reverse"
        className='music'
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}/>
    </div>
  )
}

export default Playing