import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;

    //Methods
    openSidebar: () => void;
    closeSidebar: () => void;
}


export const UIContext = createContext( {} as ContextProps );