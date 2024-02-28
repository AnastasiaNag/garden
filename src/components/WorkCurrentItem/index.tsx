
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IWork } from '../../redux/Work/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getWork } from '../../redux/Work';



const WorkCurrentItem = () => {
    const { work } = useSelector((state: RootState) => state.work);
    useEffect(() => {
        getWorkItem();
    }, []);
    const dispatch = useDispatch<AppDispatch>();
    
    const getWorkItem = async () => {
        dispatch(getWork());
    };


    return (
                <div>
                    <h1>{work?.title}</h1>
                    <p>{work?.text}</p>
                </div>
    );
};


export default WorkCurrentItem;
