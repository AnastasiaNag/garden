import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../../redux/store';
import { getAdmin } from '../../../redux/Admin';
import '../Admin.scss';

const initialState = { login: '', password: '' };

const Admin = () => {
  const { admin } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch<AppDispatch>();

  const [formValues, setFormValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({...formValues, [key]: value});
  };

  const login = () => {
    if (formValues.login === admin.login && formValues.password === admin.password) {
      localStorage.setItem('isAuthenticated', 'true');
      console.log(localStorage.getItem('isAuthenticated'));
      navigate('/admin/panel');
    } else {
      alert('Неверный логин или пароль');
    }
  };
  
  return (
    <div className="admin__panel section">
      <div className="title h2">Вход для администраторов</div>
      <div className="admin" onKeyDown={(event) => event.key === 'Enter' ? login() : false}>
        <>
        <input className="admin__utils" autoFocus onChange={onChange} value={formValues.login} name="login" placeholder="Логин"/>
        <input className="admin__utils" onChange={onChange} value={formValues.password} type="password" name="password" placeholder="Пароль"/>
        </>
        <button className="admin__utils__btn admin__utils" onClick={login}>Войти</button>
      </div>
    </div>
  );
};


export default Admin;
