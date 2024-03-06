import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWork, getWorks } from "../../redux/Work";
import { AppDispatch, RootState } from "../../redux/store";
import { Card, CardActionArea } from "@mui/material";

const AdminWorks = () => {
    const { works } = useSelector((state: RootState) => state.work);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const getMultWork = async () => {
            dispatch(getWorks());
        };
        getMultWork();
    }, [dispatch]);

    const deleteItem = (itemId: any)=> {
        dispatch(deleteWork(itemId))
    }

    return ( 
        <>
        {works.map(item => {
            return (
                <Card className="works-list__section__card">
                    <CardActionArea >
                        <div>{item.title}</div>
                        <div>{item.text}</div>
                    </CardActionArea>
                    <button onClick={() => deleteItem(item.id)}>удалить</button>
                    <button>редактировать</button>
                </Card>
            );
        })}
        <button>Добавить</button>
        </>
     );
}
 
export default AdminWorks;