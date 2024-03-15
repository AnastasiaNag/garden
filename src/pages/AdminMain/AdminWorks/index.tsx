import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteWork, editWork, getWorks } from '../../../redux/Work';
import { AppDispatch, RootState } from '../../../redux/store';
import AdminWork from './AdminWork';
import { Modal } from '@mui/material';
import { PCreateWork } from '../../../redux/Work/types';
import { Breadcrumbs, Typography, Link, TextField } from '@mui/material';

const initialState = { title: '', text: '', contentUrl: '' };

const AdminWorks = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { works } = useSelector((state: RootState) => state.work);
  const [formValues, setFormValues] = useState(initialState);
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getMultWork = async () => {
      dispatch(getWorks());
    };
    getMultWork();
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
    };
    dispatch(add(payload));
    handleClose();
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/admin">
          Выбор категории
        </Link>
        <Typography color="text.primary">Услуши</Typography>
      </Breadcrumbs>
      <TextField placeholder="Поиск" onChange={(e) => setValue(e.target.value)} />
      {filteredItems.map((item) => {
        return <AdminWork item={item} onDelete={deleteItem} saveItem={onSave} />;
      })}
      <button onClick={handleOpen}>Добавить</button>
      <Modal open={open} onClose={handleClose}>
        <>
          <input value={formValues.title} autoFocus type="text" placeholder="Title" onChange={onChange} name="title" />
          <input value={formValues.text} autoFocus type="text" placeholder="Text" onChange={onChange} name="text" />
          <button onClick={addItem}>Добавить</button>
        </>
      </Modal>
    </>
  );
};

export default AdminWorks;
