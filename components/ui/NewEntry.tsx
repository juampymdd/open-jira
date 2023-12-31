import { useContext, useState } from "react";

import { Box, Button, TextField } from "@mui/material"

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {

  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue( e.target.value )
    setTouched( true )
  }

  const onSave = () => {
    if( inputValue.trim().length === 0 ) return
    addNewEntry( inputValue )
    setIsAddingEntry(false)
    setTouched(false)
    
    setInputValue('')
  }
  return (
    <Box sx={{
      marginBottom: 2,
      paddingX: 2
    }}>
      {
        isAddingEntry ? (<>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={ inputValue.length <= 0 && touched }
            value={ inputValue }
            onChange={onTextChange}
            onBlur={()=>setTouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button
              variant="text"
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>

        </>)
          :
          (
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAddingEntry(true)}
            >
              Nueva entrada
            </Button>
          )
      }
    </Box>
  )
}
