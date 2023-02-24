import React,{useState} from 'react'
import { Context } from "../Context";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from '@mui/material';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default function Habbits() {
    const [habbits, setHabbits] = React.useContext(Context);
    const [status, setstatus] = useState("")
  const handleChange = (event) => {
    setstatus(event.target.value);
  };

  return (
    <Box>
         <List sx={style} component="nav" aria-label="mailbox folders">
        {
            habbits.map((habbit, i)=>(
                
                <ListItem button key={i}>
                    <ListItemText primary={habbit} />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleChange}
                            >
                            <MenuItem value="done">Done</MenuItem>
                            <MenuItem value="not_done">Not Done</MenuItem>
                            <MenuItem value="none">None</MenuItem>
                            </Select>
                        </FormControl>
                </ListItem>
                
            ))
        }
         </List>
    </Box>
  )
}
