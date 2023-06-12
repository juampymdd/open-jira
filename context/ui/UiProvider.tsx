import { FC, useReducer } from 'react';
import { UIContext, uiRedurcer  } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface UIProviderProps {
  children: JSX.Element | JSX.Element[];
}
const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider:FC<UIProviderProps> = ({ children } )  => {
  const [state, dispatch] = useReducer(uiRedurcer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: 'UI - OpenSidebar' })
  }

  const closeSidebar = () => {
    dispatch({ type: 'UI - CloseSidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({
      type: 'UI - Set isAddingEntry',
      payload: isAdding
    })
  }

  const startDragging = () => {
    dispatch({
      type: 'UI - Start Dragging'
    })
  }

  const endDragging = () => {
    dispatch({
      type: 'UI - End Dragging'
    })
  }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        
        //Methods
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
        
        startDragging,
        endDragging

      }}
    >
      { children }
    </UIContext.Provider>
  )
}