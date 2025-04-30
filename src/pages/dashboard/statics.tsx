import { BsCalendar4Week, BsSoundwave } from "react-icons/bs";
import { IoStatsChart, IoTimeOutline } from "react-icons/io5";
import { RiPlayList2Fill } from "react-icons/ri";
import { tGroupItem } from "../../types";
import { MdFavoriteBorder } from "react-icons/md";
import { ImPodcast } from "react-icons/im";

export const SidebarNav1:tGroupItem[] = [
    {
        label: 'Feed',
        nav: '/dashboard',
        icon: <BsSoundwave />
    },
    {
        label: 'Playlist',
        nav: '/dashboard/playlist',
        icon: <RiPlayList2Fill />
    },
    {
        label: 'Statistics',
        nav: '/dashboard/statistics',
        icon: <IoStatsChart />
    }
]

export const SidebarNav2:tGroupItem[] = [
    {
        label: 'Favorites',
        nav: '/dashboard/favorites',
        icon: <MdFavoriteBorder />
    },
    {
        label: 'History',
        nav: '/dashboard/history',
        icon: <BsCalendar4Week />
    },
    {
        label: 'Listen Later',
        nav: '/dashboard/listen-later',
        icon: <IoTimeOutline />
    },
    // {
    //     label: 'Podcast',
    //     nav: '/dashboard/podcast',
    //     icon: <ImPodcast />
    // }
]

export const SidebarNav3:tGroupItem[] = [
    {
        label: 'Metalcore',
        nav: '/dashboard/your-playlist/metalcore',
        color: 'red'
    },
    {
        label: 'Electro',
        nav: '/dashboard/your-playlist/electro',
        color: 'green'
    },
    {
        label: 'Funk',
        nav: '/dashboard/your-playlist/funk',
        color: 'yellow'
    }
]