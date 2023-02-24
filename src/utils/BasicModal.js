import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Context } from "../Context";
import { v4 as uuid } from 'uuid';

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
  const [habbits, setHabbits] = React.useContext(Context);
  const handleClose = () => setshowModal(false);
  const habbitRef = React.useRef();
  
  const saveButtonHandler = ()=>{
    const newHabbit = habbitRef.current.value
    
    if(newHabbit){
      const id = uuid();
      setHabbits(
        [{id, newHabbit, status: "none"}, ...habbits]
      )
      setshowModal(false)
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
          Create Habbit
          </Typography>
          <div className='modal-inputs' style={{display:"flex", justifyContent: "space-between"}}>
          <TextField id="outlined-basic" label="New Habbit" variant="outlined" sx={{marginBottom:"10px", maxWidth: "40%"}} inputRef={habbitRef}/>
         
          </div>
          
          <div>
            <Button onClick={saveButtonHandler} variant="contained">Save</Button>
          </div>
            
        </Box>
      </Modal>
    </div>
  );
}