import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useModalState } from './ModalState';
import './Modal.css';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({modalName, title, children}) {
  // const [open, setOpen] = React.useState(false);

  
  const { open, setOpen } = useModalState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='cateLilam' variant="outlined" onClick={handleClickOpen}>
        {modalName}
      </Button>
      <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="modalStyle">{title}</DialogTitle>
        <DialogContent className="modalStyle">
          <DialogContentText id="alert-dialog-slide-description ">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="modalStyle">
          <Button onClick={handleClose}>انجام شد</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}