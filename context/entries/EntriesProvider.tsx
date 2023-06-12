import { FC, useReducer } from 'react';
import { EntriesContext, entriesRedurcer  } from './';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps {
  children: JSX.Element | JSX.Element[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
    _id: uuidv4(),
    description: 'Occaecat ex sunt ad ad ut proident mollit id in irure ullamco.',
    status: 'pending',
    createdAt: Date.now()
  },
    {
    _id: uuidv4(),
    description: 'In-Progress: Quis ea anim Lorem do occaecat eu ea cupidatat.',
    status: 'in-progress',
    createdAt: Date.now() -1000000
  },
    {
    _id: uuidv4(),
    description: 'Finished: Velit in nulla ea esse Lorem ipsum nisi elit.',
    status: 'finished',
    createdAt: Date.now() -100000
  },
  ]
};

export const EntriesProvider:FC<EntriesProviderProps> = ({ children } ) => {
  const [state, dispatch] = useReducer(entriesRedurcer, Entries_INITIAL_STATE)
  
  const addNewEntry = (description:string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now()
    }

    dispatch({
      type: '[Entry] - Add-Entry',
      payload: newEntry
    })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({
      type: '[Entry] - Entry-Updated',
      payload: entry
    })
  }


  return (
    <EntriesContext.Provider value={{
      
      ...state,
      
      //methods
      addNewEntry,
      updateEntry
      
      }}>
      { children }
    </EntriesContext.Provider>
  )
}