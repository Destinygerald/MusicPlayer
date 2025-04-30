import { tFeedsItemNav } from '../../../../types'
import { RecentlyPlayedCard, PlaylistOfTheDayCard, RandomSongCard, SubscribeCard } from './components'
import './style.css'
import { useState } from 'react'
import { FeedPlaylistCard } from './components'

function FeedsNavItem ({ active, label, navChange }:tFeedsItemNav) {

    function handleClick () {
        navChange(label)
    }

    return (
        <div className='feeds-nav-item' onClick={handleClick}>
            <span 
                className={active == label ? 'feeds-nav-active' : '' }
                >    
                {label}
            </span>
            
            {
                active == label
                ?
                <div className='feeds-nav-active-indicator'>
                    <div />
                    <div />
                </div>
                :
                <></>
            }
        </div>
    )
}


function FeedsMainBtm () {
    
    const [ active, setActive ] = useState<string>('Playlist')

    function navChange (arg: string) {
        setActive(arg)
    }
    
    return (
        <div className='feeds-main-btm'>
            <div className='feeds-nav'>
                <FeedsNavItem active={active} label='Playlist' navChange={navChange} />
                <FeedsNavItem active={active} label='Artists' navChange={navChange} />
                <FeedsNavItem active={active} label='Albums' navChange={navChange} />
                <FeedsNavItem active={active} label='Streams' navChange={navChange} />
            </div>

            <div className='feeds-main-btm-cnt'>
                <div className='feeds-main-btm-container'>
                    {
                        Array.from(Array(12)).map(_ => (
                            <FeedPlaylistCard />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function FeedsMain () {
    return (
        <div className='feeds-main'>
            <div className='feeds-main-top'>                
                <PlaylistOfTheDayCard tracks={0} playtime={0} cover={''} />
                <RandomSongCard songname={''} artist={''} releasetime={''} cover={''} />
            </div>
            
            <FeedsMainBtm />
        </div>
    )
}


function RecentPlay () {
    return (
        <div className='recent-play'>
            <div className='recent-play-header'>
                <span>Recent play</span>
                <span>See all</span>
            </div>

            <div className='recent-play-cnt'>
                <RecentlyPlayedCard cover_image='' song_artist='Ed Sheeran' song_title='Shape Of You' playtime={206} />
                <RecentlyPlayedCard cover_image='' song_artist='Tems' song_title='Ice T' playtime={182} />
                <RecentlyPlayedCard cover_image='' song_artist='XXXtentacion' song_title='Hope' playtime={132} />
            </div>

        </div>
    )
}

function AdsSection () {
    return (
        <div className='ads-section'>
            <SubscribeCard />
        </div>
    )
}

function FeedsSide() {
    return (
        <div className='feeds-side'>
            <RecentPlay />
            <AdsSection />
        </div>
    )
}

export default function Page () {
    return (
        <div className='feeds'>
            <FeedsMain />

            <FeedsSide />
        </div>
    )
}