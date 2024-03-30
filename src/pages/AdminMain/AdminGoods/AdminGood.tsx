import { IGood } from '../../../redux/Good/types';
import { useState } from 'react';

interface Props {
  item: IGood;
  onDelete: (postId: number | string) => void;
  saveItem: (g: any, postId: number | string) => void;
}

const AdminGood = ({ item, onDelete, saveItem }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [formValues, setFormValues] = useState(item);

  const deleteItem = async () => {
    onDelete(item.id);
  };

  const setEditMode = () => {
    setIsEdit(true);
  };

  const onChange = (event: any) => {
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
    <div className="admin__card card">
      {!isEdit ? (
        <>
          <div className="h6">{item.title}</div>
          <div>{item.text}</div>
          <div>{item.price}</div>
          <button className="admin__utils__btn" onClick={setEditMode}>
            редактировать
          </button>
          <button style={{ backgroundColor: 'rgb(207, 72, 49)' }} className="admin__utils__btn" onClick={deleteItem}>
            удалить
          </button>
        </>
      ) : (
        <>
          <input autoFocus name="title" type="text" onChange={onChange} value={formValues?.title} />
          <textarea name="text" onChange={onChange} value={formValues?.text} rows={20} />
          <input name="price" type="text" onChange={onChange} value={formValues?.price} />
          <button className="admin__utils__btn" onClick={saveChanges}>
            Сохранить
          </button>
          <button style={{ backgroundColor: 'rgb(207, 72, 49)' }} className="admin__utils__btn" onClick={cancelChanges}>
            Отменить
          </button>
        </>
      )}
    </div>
  );
};

export default AdminGood;
