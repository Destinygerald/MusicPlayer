import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/home/Page'
import Dashboard from '../pages/dashboard/Layout'

export function Layout () {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
    )
}