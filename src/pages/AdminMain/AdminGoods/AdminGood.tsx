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
    if (!formValues.title || !formValues.text || !formValues.img || !formValues.price || !formValues.category) {
      alert('Пожалуйста, заполните все поля');
    } else {
      saveItem(formValues, item.id);
      setIsEdit(false);
    }
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
          <img alt="" style={{ display: 'flex', height: 'auto', width: '150px' }} src={item.img} />
          <div>{item.text}</div>
          <div>{item.price}</div>
          <div>{item.category}</div>
          <button className="admin__utils__btn" onClick={setEditMode}>
            редактировать
          </button>
          <button style={{ backgroundColor: 'rgb(207, 72, 49)' }} className="admin__utils__btn" onClick={deleteItem}>
            удалить
          </button>
        </>
      ) : (
        <>
          <input autoFocus name="title" type="text" onChange={onChange} value={formValues?.title} placeholder="Название"/>
          <textarea name="text" onChange={onChange} value={formValues?.text} rows={20} placeholder="Описание" />
          <input name="img" onChange={onChange} value={formValues?.img} placeholder="Картинка"/>
          <input name="price" type="text" onChange={onChange} value={formValues?.price} placeholder="Цена"/>
          <input name="category" type="text" onChange={onChange} value={formValues?.category} placeholder="Категория" />
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
