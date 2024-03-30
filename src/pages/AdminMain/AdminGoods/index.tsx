
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGood, deleteGood, editGood, getGoods } from '../../../redux/Good';
import { AppDispatch, RootState } from '../../../redux/store';
import AdminGood from './AdminGood';
import { Modal } from '@mui/material';
import { PCreateGood } from '../../../redux/Good/types';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import '../Admin.scss';

const initialState = { title: '', text: '', img: '', price: '' };

const AdminGoods = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { goods } = useSelector((state: RootState) => state.good);
  const [formValues, setFormValues] = useState(initialState);
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getMultGoods = async () => {
      dispatch(getGoods());
    };
    getMultGoods();
  }, [dispatch]);

  const filteredItems = goods.filter((good) => good.title.toLowerCase().includes(value.toLowerCase()));

  const deleteItem = (itemId: any) => {
    dispatch(deleteGood(itemId));
  };

  const onSave = async (formValues: any, itemId: number | string) => {
    dispatch(editGood({ formValues, itemId }));
  };

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const addItem = async () => {
    const payload: PCreateGood = {
        title: formValues.title,
        text: formValues.text,
        img: formValues.img,
        price: formValues.price,
    };
    if (!payload.title || !payload.text || payload.price) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    dispatch(addGood(payload));
    handleClose();
    setFormValues(initialState);
  };

  return (
    <>
      <div className="admin__section section">
        <div className="section__breadcrumb">
          <Breadcrumbs aria-label="breadcrumb" className="section__breadcrumb">
            <Link className="section__breadcrumb__last" underline="hover" color="inherit" href="/admin/panel">
              Выбор категории
            </Link>
            <Typography className="section__breadcrumb__current" color="text.primary">
              Товары
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="admin__input">
          <input className="admin__utils admin__utils__search" placeholder="Поиск" onChange={(e) => setValue(e.target.value)} />
          <button className="admin__utils__btn admin__utils" onClick={handleOpen}>
            Добавить
          </button>
        </div>
        {filteredItems.map((item) => {
          return <AdminGood item={item} onDelete={deleteItem} saveItem={onSave} />;
        })}
      </div>
      <Modal className="admin__modal" open={open} onClose={handleClose}>
        <div className="admin__modal" onKeyDown={(event) => (event.key === 'Enter' ? addItem() : false)}>
          <input className="admin__utils" value={formValues.title} autoFocus type="text" placeholder="Title" onChange={onChange} name="title" />
          <textarea
            className="admin__utils admin__utils__text"
            value={formValues.text}
            autoFocus
            placeholder="Text"
            onChange={onChange}
            name="text"
            rows={20}
          />
          <input className="admin__utils" value={formValues.price} autoFocus type="text" placeholder="Price" onChange={onChange} name="price" />
          <button className="admin__utils__btn admin__utils" onClick={addItem}>
            Добавить
          </button>
        </div>
      </Modal>
    </>
  );
};

 
export default AdminGoods;