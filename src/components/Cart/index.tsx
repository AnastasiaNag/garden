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
  const [items, setItems] = useState<Item[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  interface Item {
    id: string;
    category: string;
    title: string;
    text: string;
    img: string;
    price: number;
  }

  
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3001/cartitems/`);
      setItems(result.data);
      
    };

    fetchData();
  }, [open]);

  const handleDelete = async (itemId: string) => {
    try {
      await axios.delete(`http://localhost:3001/cartitems/${itemId}`);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };
  
   
 

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
          <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.price}
                  <Button onClick={() => handleDelete(item.id)}>Удалить</Button>
                </li>
              ))}
            </ul>
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

