const Admin = () => {
  const handleClick = () => {
    window.open('/admin/works', '_blank');
  };

  return (
    <>
      <button onClick={handleClick}>Изменить товары</button>
      <button>Выйти</button>
    </>
  );
};

export default Admin;