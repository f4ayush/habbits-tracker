import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

export default function ButtonAppBar({setshowModal}) {
  const location = useLocation();
  const [text, setText] = React.useState("")
  const [path, setpath] = React.useState("")
  React.useEffect(() => {
    
  if(location.pathname.includes("habits-tracker")){
    setText("Breif View")
    setpath("/")
  }else{
    setText("Detailed View")
    setpath("/habits-tracker")
  }
    
  }, [location])
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Habit
          </Typography>

          <Link to={path} ><Button color="inherit" >{text}</Button></Link>
          <Button color="inherit" onClick={()=>setshowModal(true)}>Add Habit</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
