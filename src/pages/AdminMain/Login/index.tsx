import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = { login: '', password: '' };
const Admin = () => {
  const [formValues, setFormValues] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const login = () => {
    if (formValues.login === 'admin' && formValues.password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin/panel');
    } else {
      alert('Неверный логин или пароль');
    }
  };
  return (
    <>
      <h1>Админка</h1>
      <h2>Авторизация</h2>
      <TextField onChange={onChange} value={formValues.login} name="login" placeholder="Логин" />
      <TextField onChange={onChange} value={formValues.password} name="password" placeholder="Пароль" />
      <Button onClick={login}>Войти</Button>
    </>
  );
};

export default Admin;
