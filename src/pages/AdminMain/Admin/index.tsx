import { useNavigate } from 'react-router-dom';
import '../Admin.scss'
const Admin = () => {
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    navigate(`/admin/${page}`);
  };
const logout = () => {
  localStorage.setItem('isAuthenticated', 'false');
  window.open('/admin', '_self');
  
}
  return (
    <div className="admin__panel section">
      <button className="admin__utils__btn admin__utils" onClick={()=>handleClick('works')}>Изменить услуги</button>
      <button className="admin__utils__btn admin__utils"onClick={()=>handleClick('goods')}>Изменить товары</button>
      <button className="admin__utils__btn admin__utils"onClick={()=>handleClick('articles')}>Изменить статьи</button>
      <button className="admin__utils__btn admin__utils"onClick={()=>handleClick('employees')}>Изменить сотрудников</button>
      <button onClick={logout} style={{backgroundColor: 'rgb(207, 72, 49)'}} className="admin__utils__btn admin__utils">Выйти</button>
    </div>
  );
};

export default Admin;
