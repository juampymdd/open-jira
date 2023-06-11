import { useContext } from 'react';
import { Box, Drawer, List, Typography, ListItemButton, ListItemText, Divider } from '@mui/material';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { UIContext } from '@/context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

export const Sidebar = () => {

  const { sidemenuOpen, closeSidebar } = useContext(UIContext)

  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSidebar}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
          <List>
            {
              menuItems.map((item, index) => (
                <ListItemButton key={item}>
                  {index % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                  <ListItemText primary={item} sx={{ marginLeft: '5px' }}/>
                </ListItemButton>
              ))
            }
          </List>
          <Divider />
        </Box>
      </Box>
    </Drawer>
  )
}
