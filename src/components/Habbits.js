import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default function Habbits() {
    const habbits = useSelector((state) => state.habbits);
  return (
    <Box>
         <List sx={style} component="nav" aria-label="mailbox folders">
        {
            habbits.map((habbit, i)=>(
                
                <ListItem button key={i}>

                    <ListItemText primary={habbit.name} />
                       
                </ListItem>
                
            ))
        }
         </List>
    </Box>
  )
}
