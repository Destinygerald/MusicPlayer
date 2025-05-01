import { useLocation, useNavigate } from 'react-router-dom'
import { tGroupItem, tSidebarGroup } from '../../types'
import './style.css'
import './style.size_960.css'
import { SidebarNav1, SidebarNav2, SidebarNav3 } from './statics'
import React, { useState } from 'react'
import { BiSearch, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { FaPauseCircle, FaPlayCircle, FaVolumeDown, FaVolumeMute } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoIosShuffle } from 'react-icons/io'
import { LuRepeat, LuRepeat1 } from 'react-icons/lu'

function SidebarIndicator () {
    return (
        <div className='sidebar-selected-indicator'>
            <div />
            <div />
        </div>
    )
}

function SidebarItem_v1 ({ nav, label, icon }: tGroupItem) {
    
    const location = useLocation()
    const navigate = useNavigate()
    
    function handleClick () {
        navigate(nav, {
            state: {
                current: label
            }
        })
    }

    function checkActive () {
        if (location?.state?.current == label ) {
            return 'sidebar-selected-item'
        } else if (location.pathname == '/dashboard' && label == 'Feed') {
            return 'sidebar-selected-item'
        } else if ((location.pathname == '/playlist' || location.pathname.includes('/playlist')) && label == 'Playlist') {
            return 'sidebar-selected-item'
        }
        else {
            return 'sidebar-item'
        }
    }

    function indicator () {
        if (location?.state?.current == label ) {
            return (
                <SidebarIndicator />
            )
        } else if (location.pathname == '/dashboard' && label == 'Feed') {
            return (
                <SidebarIndicator />
            )
        } else if ((location.pathname == '/playlist' || location.pathname.includes('/playlist')) && label == 'Playlist') {
            return (
                <SidebarIndicator />
            )
        }
        else {
            return <></>
        }
    }

    return (
        <div className={checkActive()} onClick={handleClick}>
            <span>{ icon }</span>
            <span>{ label }</span>
            {
                indicator()
            }
        </div>
    )   
}

function SidebarItem_v2 ({ nav, label, color }: tGroupItem) {
    
    const location = useLocation()
    const navigate = useNavigate()
    
    function handleClick () {
        navigate(nav, {
            state: {
                current: label
            }
        })
    }

    function checkActive () {
        if (location?.state?.current == label ) {
            return 'sidebar-selected-item'
        } else {
            return 'sidebar-item'
        }
    }

    return (
        <div className={checkActive()} onClick={handleClick}>
            <span className='playlist-circle' style={{ backgroundColor: color }} />
            <span>{ label }</span>
            {
                location?.state?.current == label
                ?
                <div className='sidebar-selected-indicator'>
                    <div />
                    <div />
                </div>
                :
                <></>
            }
        </div>
    )   
}

function SidebarGroup ({group_name, group_items, type=1 }: tSidebarGroup) {
    return (
        <div className='sidebar-group'>
            <span>{group_name}</span>

            <div className='sidebar-group-main'>
                {
                    type == 1
                    ?
                    group_items?.map((item, i) => (
                        <SidebarItem_v1 key={i} nav={item.nav} icon={item?.icon} label={item?.label} />
                    ))
                    :
                    group_items?.map((item, i) => (
                        <SidebarItem_v2 key={i} nav={item.nav} color={item?.color} label={item?.label} />
                    ))
                }
            </div>
        </div>
    )
}

export function Sidebar () {
    return (
        <div className='sidebar'>
            <span className='sidebar-logo'>SOUNDCL▲D </span>

            <div className='sidebar-cnt'>
                <SidebarGroup group_items={SidebarNav1} />
                <SidebarGroup group_items={SidebarNav2} group_name='Your Music' />
                <SidebarGroup group_items={SidebarNav3} group_name='Your Playlist' type={2} />
            </div>
        </div>
    )
}


export function Topbar () {

    const [search, setSearch] = useState<string>('')

    function handleSearchBasedOnCurrentRoute () {}

    function searchPlaceholderBasedonCurrentRoute (): string {
        return 'Search by artists, songs or album'
    }

    function changeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <div className='topbar'>
            <div className='topbar-search'>
                <input type='text' placeholder={searchPlaceholderBasedonCurrentRoute()} value={search} onChange={changeHandler} />
                <span className='topbar-search-icon'>
                    <BiSearch />
                </span>
            </div>

            <div className='topbar-user'>
                <div>
                    <img />
                </div>

                <span>John Doe</span>
            </div>

        </div>
    )
}


// Write the function for the Controls
// The Control will be dependent on the list that's selected [so you'll need a global varible called selected list]
export function Player () {
    const [ paused, setPaused ] = useState<boolean>(true)
    const [ faved, setFaved ] = useState<boolean>(false)
    const [ shuffled, setShuffled ] = useState<boolean>(false)
    const [ repeat, setRepeat ] = useState<number>(0)
    const [ muted, setMuted ] = useState<boolean>(false)

    function togglePaused () {
        setPaused(!paused)
    }

    function toggleFaved () {
        setFaved(!faved)
    }

    function toggleShuffled () {
        setShuffled(!shuffled)
    }

    function toggleRepeat () {
        if (repeat == 0) {
            setRepeat((repeat + 1) % 3)
        } else if (repeat == 1) {
            setRepeat((repeat + 1) % 3)
        } else {
            setRepeat((repeat + 1) % 3)
        }
    }

    function toggleMuted () {
        setMuted(!muted)
    }

    function repeatState () {
        if (repeat == 1) {
            return (
                <span className='active-control' onClick={toggleRepeat}> <LuRepeat /> </span>
            )
        } else if (repeat == 2) {
            return (
                <span className='active-control' onClick={toggleRepeat}> <LuRepeat1 /> </span>
            )
        } else {
            return <span className='inactive-control' onClick={toggleRepeat}> <LuRepeat /> </span>            
        }
    }

    return (
        <div className='player-display'>
            <div>
                <span>Song Playing</span>
                <span>Artist</span>
            </div>

            <div className='player-controls'>
                <div>
                    <span> <BiSkipPrevious /> </span>
                    <span onClick={togglePaused}>{ paused ? <FaPlayCircle /> : <FaPauseCircle />}</span>
                    <span> <BiSkipNext /> </span>
                </div>

                <div>
                    <span>0:00</span>
                    <div className='player-controls-track'>
                        <div id='player-controls-played' />
                        <div id='player-controls-indicator' />
                    </div>
                    <span>4:30</span>
                </div>
            </div>

            <div className='other-controls'>
                <div>
                    <span className={faved ? 'active-control' : 'inactive-control'} onClick={toggleFaved}> <MdFavorite /> </span>
                    <span className={shuffled ? 'active-control' : 'inactive-control'} onClick={toggleShuffled}> <IoIosShuffle/> </span>
                    <> { repeatState() }  </>
                    <span className={!muted ? 'active-control' : 'inactive-control'} onClick={toggleMuted}>
                        { muted ? <FaVolumeMute /> : <FaVolumeDown />  }
                    </span>
                </div>

                <div className='volume-controls'>
                    <div />
                </div>
            </div>
        </div>
    )
}


export function SongCard () {
    return (
        <div className='song-card'>
            
        </div>
    )
}