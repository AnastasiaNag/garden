import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorks } from "../../redux/Work";
import { RootState, AppDispatch } from "../../redux/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IWork } from "../../redux/Work/types";

const WorkItem = () => {
    const { works } = useSelector((state: RootState) => state.work);

    useEffect(() => {
        getWork();
    }, []);

    const dispatch = useDispatch<AppDispatch>();

    const getWork = async () => {
        dispatch(getWorks());
    };
    return ( 
        <div>
            <div>
                <Header />
            </div>
            <div>
                {works.map((item: IWork) => {
                    return (
                        <><div>{item.text}</div>
                        <div>{item.text}</div></>
                    )
                    })}
            </div>

            <div>
                <Footer />
            </div>
        </div> );
     ;
}
 
export default WorkItem;