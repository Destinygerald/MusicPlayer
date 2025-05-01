import { tPlaylistSongsHdr } from '../../../../types';
import './style.css'
import { FaMusic } from 'react-icons/fa6'


function PlaylistSongsHdr ({ playlist_name, year, no_of_songs, playtime, added_by }: tPlaylistSongsHdr) {
    
    function parseTime () {
        
        if (!playtime) {
            return `00:48:40`
        }

        let hrs;
        let mins;
        let sec = playtime % 60;

        const derive_hrs = Math.floor(playtime / 3600);
        const derive_mins = Math.floor(playtime / 60)

        if (derive_hrs > 0) {
            hrs = derive_hrs > 10 ? derive_hrs : `0${derive_hrs}`
        } else {
            hrs = null;
        }

        mins = derive_mins > 10 ? derive_mins : `0${derive_mins}`

        if (hrs) return `${hrs}:${mins}:${sec}`

        return `${mins}:${sec}`
    }
    
    return (
        <div className='playlist-songs-header'>
            <div> <FaMusic /> </div>

            <div className='playlist-songs-header-info'>
                <span>{playlist_name || 'PlayList Name'}</span>
                <span>Added by - {added_by}</span>
                <span>{year || 2025} • {no_of_songs || 28 } Songs • {parseTime()} run time </span>
                <button>Play all</button>
            </div>
        </div>
    )
}

function PlaylistSongsMain () {
    return (
        <div className='playlist-songs-main'>

        </div>
    )   
}

export function PlaylistSongs () {
    return (
        <div className='playlist-songs'>
            <PlaylistSongsHdr playlist_name='' year='' no_of_songs={32} playtime={7208} added_by='John Doe' />
            <PlaylistSongsMain />    
        </div>
    )
}