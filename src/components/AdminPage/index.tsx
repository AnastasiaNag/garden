import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { getAdmin } from '../../redux/Admin';

const AdminPage = () => {
    const { admin } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(getAdmin());
  }, [dispatch]);

    
  const [open, setOpen] = useState(false);

    const [isAdmin, setIsAdmin] = useState(false)
    const [password, setPassword] = useState('')
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  const handleSubmit = () => {
    if (password === admin.pas){
      setIsAdmin(true)
  
    } else{
      alert('wrong pas')
    }
  }
  
  const inputPassword = (event: any) => {
    setPassword(event.target.value); 
  }

    return ( 
        <><button onClick={handleOpen}>Go to Admin</button><Modal open={open} onClose={handleClose}>
            {!isAdmin ?
                <form onSubmit={handleSubmit}>
                    <input value={password} onChange={inputPassword} autoFocus type="password" placeholder="Password" name="password" />
                    <button type="submit">Login</button>
                </form>
                :
                <Navigate to="/admin" />}
        </Modal></>
     );
}
 
export default AdminPage;