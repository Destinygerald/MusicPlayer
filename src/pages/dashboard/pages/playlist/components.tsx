import { tGridCard } from '../../../../types'
import './style.css'
import { FaMusic } from 'react-icons/fa6'

export function GridCard ({cover_image, playlist_name, no_of_songs}: tGridCard) {
    return (
        <div className='playlist-grid-card'>
            <div className='playlist-grid-card-cover'>
                <div />
                <div />
                <div> { cover_image ? <img src={cover_image} /> : <span className='playlist-cover-alt'> <FaMusic /> </span> } </div>
            </div>

            <div className='playlist-grid-card-content'>
                <span>Playlist Name</span>
                <span> 32 Songs</span>
            </div>
        </div>
    )
}

export function RowCard () {}