import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteWork, editWork, getWorks } from '../../../redux/Work';
import { addArticle, deleteArticle, editArticle, getArticles } from '../../../redux/Article';
import { AppDispatch, RootState } from '../../../redux/store';
import AdminItem from './AdminWork';
import { Modal } from '@mui/material';
import { PCreateWork } from '../../../redux/Work/types';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import '../Admin.scss';

const initialState = { title: '', text: '', img: '' };

const AdminItems = ({isArticle} : any) => {
  const [open, setOpen] = useState<boolean>(false);
  const { works } = useSelector((state: RootState) => state.work);
  const { articles } = useSelector((state: RootState) => state.article);
  const [formValues, setFormValues] = useState(initialState);
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getMultItems = async () => {
      dispatch(getWorks());
    };
    getMultItems();
  }, [dispatch]);

  const filteredItems = works.filter((work) => work.title.toLowerCase().includes(value.toLowerCase()));

  const deleteItem = (itemId: any) => {
    dispatch(deleteWork(itemId));
  };

  const onSave = async (formValues: any, itemId: number | string) => {
      dispatch(editWork({ formValues, itemId }));
  };

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const addItem = async () => {
    const payload: PCreateWork = {
      title: formValues.title,
      text: formValues.text,
      img: formValues.img,
    };
    if (!payload.title || !payload.text || !payload.img ) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    dispatch(add(payload));
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
              {isArticle? 'Статьи' : 'Услуги'}
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
          return <AdminItem item={item} onDelete={deleteItem} saveItem={onSave} />;
        })}
      </div>
      <Modal className="admin__modal" open={open} onClose={handleClose}>
        <div className="admin__modal" onKeyDown={(event) => (event.key === 'Enter' ? addItem() : false)}>
          <input className="admin__utils" value={formValues.title} autoFocus type="text" placeholder="Title" onChange={onChange} name="title" />
          <textarea
            className="admin__utils admin__utils__text"
            value={formValues.text}
            placeholder="Описание"
            onChange={onChange}
            name="text"
            rows={20}
          />
          <button className="admin__utils admin__utils__btn">Загрузить фото</button>
          <button className="admin__utils__btn admin__utils" onClick={addItem}>
            Добавить
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AdminItems;
