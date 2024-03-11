import { Card, CardActionArea, IconButton } from '@mui/material';
import { IWork } from '../../../redux/Work/types';
import { useState } from 'react';

interface Props {
  item: IWork;
  onDelete: (postId: number | string) => void;
  saveItem: (g: any, postId: number | string) => void;
}

const AdminWork = ({ item, onDelete, saveItem }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [formValues, setFormValues] = useState(item);

  const deleteItem = async () => {
    onDelete(item.id);
  };

  const setEditMode = () => {
    setIsEdit(true);
  };

  const onChange = (event : any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };
  const saveChanges = async () => {
    saveItem(formValues, item.id);
    setIsEdit(false);
  };
  const cancelChanges = () => {
    setFormValues(item);
    setIsEdit(false);
  };

  return (
    <Card className="works-list__section__card">
      {!isEdit ? (
        <>
          <CardActionArea>
            <div>{item.title}</div>
            <div>{item.text}</div>
          </CardActionArea>
          <button onClick={deleteItem}>удалить</button>
          <button onClick={setEditMode}>редактировать</button>
        </>
      ) : (
        <>
          <CardActionArea>
            <input name="title" type="text" onChange={onChange} value={formValues?.title} />
            <input name="text" type="text" onChange={onChange} value={formValues?.text} />
          </CardActionArea>
          <IconButton color="success" className="actions__icon-btn btn" onClick={saveChanges}>
            save
          </IconButton>
          <IconButton color="error" className="actions__icon-btn btn" onClick={cancelChanges}>
            cancel
          </IconButton>
        </>
      )}
    </Card>
  );
};

export default AdminWork;
