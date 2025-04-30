import { tContextChildren } from "../types";
import { PageIndicatorContextProvider, PageIndicatorContextFunction } from "./PageIndicatorContext";

export function Provider ({ children }: tContextChildren) {
    return (
        <>
            <PageIndicatorContextProvider>
                { children }
            </PageIndicatorContextProvider>
        </>
    )
}

export function Selector (state: string) {
    switch (state) {
        case 'page_indicator':
            return PageIndicatorContextFunction();
            break;
        default:
            return;
    }
}