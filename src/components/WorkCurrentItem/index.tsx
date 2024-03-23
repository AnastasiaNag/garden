import { useEffect, useState } from 'react';
import { Breadcrumbs, Typography, Link, Card, CardActionArea } from '@mui/material';
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
    <>
    <Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/">
      Домашняя страница
    </Link>
    <Link underline="hover" color="inherit" href="/works">
    Услуги
    </Link>
    <Typography color="text.primary">{work?.title}</Typography>
  </Breadcrumbs>
    <div>
      <h1>{work?.title}</h1>
      <p>{work?.text}</p>
    </div>
    </>
  );
};

export default WorkCurrentItem;
