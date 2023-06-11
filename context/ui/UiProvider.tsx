import { FC, useReducer } from 'react';
import { UIContext, uiRedurcer  } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

interface UIProviderProps {
  children: JSX.Element | JSX.Element[];
}
const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider:FC<UIProviderProps> = ({ children } )  => {
  const [state, dispatch] = useReducer(uiRedurcer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: 'UI - OpenSidebar' })
  }

  const closeSidebar = () => {
    dispatch({ type: 'UI - CloseSidebar' })
  }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        
        //Methods
        openSidebar,
        closeSidebar
      }}
    >
      { children }
    </UIContext.Provider>
  )
}