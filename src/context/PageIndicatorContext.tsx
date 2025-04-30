import { createContext, useContext, useState } from 'react'
import { tContextChildren, tPageIndicatorContext } from '../types'


const PageIndicatorContext = createContext({} as tPageIndicatorContext)

export function PageIndicatorContextFunction (): tPageIndicatorContext {
    return (
        useContext(PageIndicatorContext)
    )
}


export function PageIndicatorContextProvider ({ children }: tContextChildren) {
    
    const [ currentPage, setCurrenttPage ] = useState<number>(1);

    function changeCurrentPage(arg: number): void {
        setCurrenttPage(arg)
    }

    const contextValue = {
        state: currentPage,
        actions: {
            changeCurrentPage: (arg: number) => changeCurrentPage(arg)
        }
    }

    return (
        <PageIndicatorContext.Provider value={{ contextValue }}>
            { children }
        </PageIndicatorContext.Provider>
    )
}