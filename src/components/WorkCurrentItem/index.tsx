// import { useEffect, useState } from 'react';
// // import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../redux/store';
// import { getWork } from '../../redux/Work';
// import { useParams } from 'react-router-dom';
// import { IWork } from '../../redux/Work/types';
// import axios from 'axios';

const WorkCurrentItem = () => {
//   const { work } = useSelector((state: RootState) => state.work);
//   const [item, setItem] = useState(null as IWork | null);
//   const { workId } = useParams();
//   const dispatch = useDispatch<AppDispatch>();

//   const getItem = async () => {
//     const item = (await axios.get(`/works/${workId}`)).data;
//     setItem(item);
//   };

//   useEffect(() => {
//     getItem();
//     dispatch(getWork(workId || null));
//   }, [dispatch]);

  return (
    <div>
      {/* <h1>{item?.title}</h1>
      <p>{item?.text}</p> */}
    </div>
  );
};

export default WorkCurrentItem;
