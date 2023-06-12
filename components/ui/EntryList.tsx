import { FC, useContext, useMemo } from "react";

import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "@/interfaces"
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  // console.log({"status":status})
  const { entries, updateEntry } = useContext( EntriesContext )
  const { isDragging, endDragging } = useContext( UIContext )

  const entiresByStatus = useMemo(() => entries.filter( entry => entry.status === status)
  , [entries])
  
  const onDropEntry = (e: React.DragEvent<HTMLDivElement>) => {
    const entryId = e.dataTransfer.getData('text/plain')
    
    const entry = entries.find( entry => entry._id === entryId )!;
    entry.status = status
    updateEntry( entry )
    endDragging()

  }

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    // TODO: aqui haremos drop
    <div
      onDrop={ onDropEntry }
      onDragOver= { allowDrop }
      className={ isDragging ? styles.dragging : '' }
    >
      <Paper sx={{
        height: 'calc( 100vh - 250px )',
        overflow: 'auto',
        backgroundColor: 'transparent',
        padding: '1px 5px'
      }}>
        {/* Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1 , transition: 'all .3s'}}>
          {
            entiresByStatus.map( entry => (
              <EntryCard key={ entry._id } entry={ entry } />
            ))
          }
          
        </List>
      </Paper>

    </div>
  )
}
