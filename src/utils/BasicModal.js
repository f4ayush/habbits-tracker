import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createHabit } from '../actions/habits';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({showModal, setshowModal}) {
  const habits = useSelector((state) => state.habits);
  const [error, seterror] = React.useState({value:false, message:""})
  const [habit, sethabit] = React.useState("")

  const handleClose = () => setshowModal(false);
  const habitRef = React.useRef();
  const dispatch = useDispatch();
  
  const handleChange = (e)=>{
    sethabit(e.target.value);
    seterror({value:false, message:""})
  }
  const saveButtonHandler = ()=>{
    
    if(habit){
      dispatch(createHabit({name: habit, history:{}}, habits))
      setshowModal(false)
    }else{
      seterror({value:true, message:"This field is required."})
    }
  }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 14, textAlign: "center"}} color="text.primary" gutterBottom variant='h5'>
          Create Habit
          </Typography>
          <div className='modal-inputs' style={{display:"flex", justifyContent: "space-between"}}>
          <TextField id="outlined-basic" label="New Habit" variant="outlined" sx={{marginBottom:"10px", maxWidth: "40%"}} error={error.value} helperText={error.message} value={habit} onChange={handleChange}/>
         
          </div>
          
          <div>
            <Button onClick={saveButtonHandler} variant="contained">Save</Button>
          </div>
            
        </Box>
      </Modal>
    </div>
  );
}