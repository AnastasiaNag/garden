import { useDispatch, useSelector } from 'react-redux';
import './WorksList.scss';
import { Breadcrumbs, Typography, Link, Card, CardActionArea } from '@mui/material';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { getWorks } from '../../redux/Work';

const WorksList = () => {
    const { works } = useSelector((state: RootState) => state.work);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        getWork();
    }, []);
    const getWork = async () => {
        dispatch(getWorks());
    };

    return (
        <div className="works-list__section section">
            <div className='works-list__section__breadcrumb'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Домашняя страница
                    </Link>
                    <Typography color="text.primary">Услуги</Typography>
                </Breadcrumbs>
            </div>
            <div className="works-list__section__title h2">Услуги</div>
            <div className='works-list__section__cards'>
                {works.map(item => {
                    return (
                        <Card className='works-list__section__card'>
                            <CardActionArea >
                                <div>{item.title}</div>
                                <div>{item.text}</div>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default WorksList;
