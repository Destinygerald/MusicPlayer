import { useState } from 'react'
import { tGridCard } from '../../../../types'
import './style.css'
import { FaMusic } from 'react-icons/fa6'

export function GridCard ({ cover_image, playlist_name, no_of_songs }: tGridCard) {
    return (
        <div className='playlist-grid-card'>
            <div className='playlist-grid-card-cover'>
                <div />
                <div />
                <div> { cover_image ? <img src={cover_image} /> : <span className='playlist-cover-alt'> <FaMusic /> </span> } </div>
            </div>

            <div className='playlist-grid-card-content'>
                <span>{playlist_name}</span>
                <span> {no_of_songs} Songs</span>
            </div>
        </div>
    )
}

export function RowCard ({ cover_image, playlist_name, no_of_songs }: tGridCard) {
    
    const [ saved, setSaved ] = useState<boolean>(false)

    function savePlaylist () {
        setSaved(true)
    }

    function unsavePlaylist () {
        setSaved(false)
    }
    
    return (
        <div className='playlist-row-card'>
            <div className='playlist-row-card-img'>
                <div> 
                    {
                        cover_image
                        ?
                        <img src={cover_image} />
                        :
                        <FaMusic />
                    } 
                </div>

                <span>{playlist_name}</span>
            </div>

            <span>{no_of_songs} songs</span>
            
            {
                !saved
                ?
                <button onClick={savePlaylist} className='save-playlist-btn'>Save Playlist</button>
                :
                <button onClick={unsavePlaylist} className='unsave-playlist-btn'>Unsave Playlist</button>
            }
        </div>
    )
}