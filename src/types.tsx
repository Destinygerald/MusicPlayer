import React from "react"
import { IconType } from "react-icons"

export type tPageIndicatorContext = {

}

export type tContextChildren = {
    children: React.ReactNode
}

type tPageIndicatorContextActions = {
    changeCurrentPage: (arg: number) => void
}

export type tPageIndicatorContextValue = {
    state: number,
    actions: tPageIndicatorContextActions
}

export type tDropMenu = {
    menu? : boolean,
    menuFalse: () => void
}

export type tGroupItem = {
    key? : string | number,
    nav: string,
    label: string,
    icon?: IconType | any,
    color?: string
}

export type tSidebarGroup = {
    group_name? : string, 
    group_items: tGroupItem[],
    type?: number
}

export type tPlaylistOfTheDay = {
    tracks: number,
    playtime: number,
    cover: string
}

export type tRandomSongCard = {
    songname: string,
    artist: string,
    releasetime: string,
    cover: string
}

export type tFeedsItemNav = {
    active: string,
    label: string,
    navChange: (arg: string) => void
}

export type tFeedPlaylistCard = {
    playlist_title: string, 
    playlist_cover_image: string,
    tracks: number,
    playtime: number,
    release_date: string
}

export type tFeedsSideCard = {
    cover_image: string,
    song_title: string,
    song_artist: string,
    playtime: number
}