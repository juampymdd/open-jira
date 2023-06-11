import { useContext } from 'react';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

import { UIContext } from '@/context/ui';

export const Navbar = () => {

  const { openSidebar } = useContext(UIContext)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton 
        size='large'
        edge='start'
        onClick={openSidebar}
        >
          <MenuOutlinedIcon style={{color:'white'}}/>
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
