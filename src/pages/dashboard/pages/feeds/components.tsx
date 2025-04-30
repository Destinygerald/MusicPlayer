import { useState } from 'react'
import { tFeedPlaylistCard, tFeedsSideCard, tPlaylistOfTheDay, tRandomSongCard } from '../../../../types'
import './style.css'
import { CiMenuKebab } from 'react-icons/ci'
import { BiPlay } from 'react-icons/bi'

// @ts-ignore
export function PlaylistOfTheDayCard ({ tracks, playtime, cover }: tPlaylistOfTheDay) {
    return (
        <div className='playlist-of-the-day-card'>

        </div>
    )
}

// @ts-ignore
export function RandomSongCard ({ songname, artist, releasetime, cover }: tRandomSongCard) {
    return (
        <div className='random-song-card'>

        </div>
    )
}

export function FeedPlaylistCard ({ playlist_title='title', playlist_cover_image, tracks=88, playtime, release_date='27, April 2024' }: tFeedPlaylistCard) {
    
    const [ clicked, setClicked ] = useState<boolean>(false)

    function parsePlaytime (arg: number): string {
        
        let hrs = 0;
        let min = 0;

        if (arg) {
            hrs = Math.floor(arg / 60);
            min = arg % 60;

            return `${hrs}h ${min}m`
        }
        
        return '2h 15m'
    }

    function toggleClicked () {
        setClicked(!clicked)
    }
    
    return (
        <div className='feed-playlist-card'>
            <div className='feed-playlist-card-identifier'>
                <div> <img src={playlist_cover_image} /> </div>
                <span>{playlist_title}</span>
            </div>

            <div>
                <span>{`${tracks} tracks`}</span>
                <span>•</span>
                <span>{parsePlaytime(playtime)}</span>
            </div>

            <div>{release_date}</div>

            <div>
                <span> <BiPlay /> </span>
                <span onClick={toggleClicked}> <CiMenuKebab /> </span>
            </div>
            
            {
                clicked
                ?
                <div className='feed-playlist-card-actions'></div>
                :
                <></>
            } 
        </div>
    )
}

export function FeedArtistCard () {
    return (
        <div className='feed-artist-card'></div>
    )
}


export function FeedAlbumsCard () {
    return (
        <div className='feed-album-card'></div>
    )
}

export function FeedStreamsCard () {
    return (
        <div className='feed-streams-card'></div>
    )
}

export function RecentlyPlayedCard ({ cover_image, song_title, song_artist, playtime }: tFeedsSideCard) {
    
    function parsePlaytime (): string  {

        if (playtime) {
            let mins = Math.floor(playtime / 60);
            let sec : string | number = playtime % 60;

            if ( sec < 10) {
                sec = '0' + sec;
            }

            return `${mins}:${sec}`
        }
        
        return '2:30'
    }
    
    return (
        <div className='recently-played-card'>
            <div className='recently-played-card-cnt'>
                <div> <img src={cover_image} /> </div>

                <div>
                    <span>{song_title}</span>
                    <span>{song_artist}</span>
                </div>
            </div>

            <span>{parsePlaytime()}</span>
        </div>
    )
}

export function SubscribeCard () {
    return (
        <div className='subscribe-card'>
            <div className='subscribe-card-cnt'>
                <span>Subscribe to SoundClad Updates.</span>
                <span> Get Updates on new songs and news of your favorite artists </span>
                <button>Subscribe</button>
            </div>

            <div />
        </div>
    )
}