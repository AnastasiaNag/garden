import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getWork } from '../../redux/Work';
import { useParams } from 'react-router-dom';
import { IWork } from '../../redux/Work/types';
import axios from 'axios';

const WorkCurrentItem = () => {
  const { work } = useSelector((state: RootState) => state.work);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWork(id || null));
  }, []);

  return (
    <div>
      <h1>{work?.title}</h1>
      <p>{work?.text}</p>
    </div>
  );
};

export default WorkCurrentItem;
