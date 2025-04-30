import { useState } from 'react'
import './style.css'
import { RiMenu3Fill } from 'react-icons/ri'
import { tDropMenu } from '../types'
import { BsX } from 'react-icons/bs'

function DropMenu ({ menu, menuFalse }: tDropMenu) {
    return (
        <div className='dropmenu'>
            {
                menu
                ?
                <div className='dropmenu-cnt'>
                    <span className='exit' onClick={menuFalse}> <BsX /> </span>
                </div>
                :
                <></>
            }
        </div>
    )
}

export function Navbar () {
    
    const [ menu, setMenu ] = useState<boolean>(false)

    function menuTrue () {
        document.querySelector('.app')?.classList.add('dropmenu-visible')
        setMenu(true)
    }

    function menuFalse () {
        setMenu(false)
    }

    return (
        <div className='navbar'>
            <div className='logo'>SoulSounds</div>

            <span className='navbar-icon' onClick={menuTrue}>
                <RiMenu3Fill />
            </span>

            <DropMenu menuFalse={menuFalse} menu={menu} />
        </div>
    )
}