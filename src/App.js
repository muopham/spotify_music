import Navbar from './components/Navbar'
import Content from './components/Content'
import './App.css';
import {Songs} from './components/Context'
import Data from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';
function App() {

  const [song, setSong] = useState(Data[0])

  const handleSetSong = (idSong) => {
    const song = Data.find(song => song.id === idSong)
    if(!song){
      setSong(Data[0])
    } 
    else{
      setSong(song)
    }
  }
  return ( 
    <>
      <Songs.Provider value={{Data, song, handleSetSong}}>
        <div className="flex font-poppin">
            <Navbar/>
            <Content/>
        </div>   
        <Playing/>
      </Songs.Provider>
    </>
  );
}

export default App;
