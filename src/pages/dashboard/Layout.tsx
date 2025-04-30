import './style.css'
import { Routes, Route } from 'react-router-dom'
import { Player, Sidebar, Topbar } from './components'
import Feeds from './pages/feeds/Page'

export default function Layout () {
    return (
        <div className='dashboard'>
            <Sidebar />

            <div className='dashboard-cnt'>
                <Topbar />

                <div className='dashboard-main'>
                    <Routes>
                        <Route path='/' element={<Feeds />} />
                        <Route path='*' element={<Feeds />} />
                    </Routes>
                </div>

                <Player />
            </div>
        </div>
    )
}