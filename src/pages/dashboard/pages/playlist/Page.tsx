import { useState } from 'react'
import './style.css'
import { IoGrid } from 'react-icons/io5'
import { MdTableRows } from 'react-icons/md'
import { tPlaylistHeader, tPlaylistMain } from '../../../../types'
import { GridCard, RowCard } from './components'
import { Route, Routes } from 'react-router-dom'
import { PlaylistSongs } from './Playlist_songs'

function PlaylistHeader ({displayType, rowDisplay, gridDisplay}: tPlaylistHeader) {

    const [ sortOpen, setSortOpen ] = useState<boolean>(false)
    
    function toggleSortOpen () {
        setSortOpen(!sortOpen)
    }

    return (
        <div className='playlist-header'>
            <div onClick={toggleSortOpen} className='playlist-header-sort-btn'>
                Sort By <span> { sortOpen ? '▲' : '▼' } </span>
            </div>

            <div className='playlist-display-control'>
                <span onClick={gridDisplay} className={displayType == 1 ? 'playlist-display-selected' : ''}> <IoGrid /> </span>
                <span onClick={rowDisplay} className={displayType == 0 ? 'playlist-display-selected' : ''}> <MdTableRows /> </span>
            </div>
        </div>
    )
}

function PlaylistMain ({displayType}: tPlaylistMain) {
    
    function DisplayReturn () {
        if (displayType == 0) {
            return (
                <div className='playlist-main-row'>
                    {
                        Array.from(Array(32)).map((_, i) => (
                            <RowCard id='73882392837230829' key={i} cover_image='' playlist_name={`Playlist ${i}`} no_of_songs={30} />
                        ))
                    }
                </div>
            )
        } else {
            return (
                <div className='playlist-main-grid'>
                    {
                        Array.from(Array(32)).map((_, i) => (
                            <GridCard id='73882392837230829' key={i} cover_image='' playlist_name={`Playlist ${i}`} no_of_songs={30} />
                        ))
                    }
                </div>
            )
        }
    }
    
    return (
        <div className='playlist-main'>
            {
                DisplayReturn()
            }
        </div>
    )
}

function PageIndex () {
    const [ displayType, setDisplayType ] = useState<number>(0)

    function gridDisplay () {
        setDisplayType(1)
    }

    function rowDisplay () {
        setDisplayType(0)
    }
    

    // useEffect to fetch available playlist list
    // use intersection observer to handle pagination

    return (
        <div className='playlist'>
            <PlaylistHeader displayType={displayType} gridDisplay={gridDisplay} rowDisplay={rowDisplay} />
            <PlaylistMain displayType={displayType} />
        </div>
    )
}

export default function Page () {
    return (
        <Routes>
            <Route index element={<PageIndex />} />
            <Route path='/:id' element={<PlaylistSongs />} />
        </Routes>
    )
}