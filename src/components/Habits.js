import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';

const style = {
    width: '100%',
    bgcolor: 'background.paper',
};

export default function Habits() {
    const habits = useSelector((state) => state.habits);
    
  
    console.log(habits)
  return (
    <Box>
         <List sx={style} component="nav" aria-label="mailbox folders">
        {
            habits.map((habit, i)=>(
                
                <ListItem button key={i}>
                    <ListItemIcon> < CircleIcon /> </ListItemIcon>
                    <ListItemText primary={habit.name} />
                    {console.log(habit.history[new Date().toLocaleDateString()])}
                    <ListItemText primary={habit.history[new Date().toLocaleDateString()] || "Not Done"} />
                    
                </ListItem>
                
            ))
        }
         </List>
    </Box>
  )
}
