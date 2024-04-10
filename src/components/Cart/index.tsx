import './cart.scss';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';




export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      const [items, setItems] =  axios.get(`http://localhost:3001/goods`);
      
        
      }, []);
  
  
  return (
    <div className="Cart">
    <React.Fragment>
    <img src="img/sumka.png" alt="" className="right-menu__cart" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Корзина</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Назад</Button>
          <Button type="submit">Оформить заказ</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  );
}