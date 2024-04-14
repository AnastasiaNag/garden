import GalleryEmploee from './GalleryEmployee';
import './Employee.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getEmployees } from '../../redux/Employees';

const Employee = () => {
  const { employees } = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getEmployee = async () => {
      dispatch(getEmployees());
    };
    getEmployee();
  }, [dispatch]);

  return (
    <section className="employee__section section">
      <h2 className="employee__title title h2">Наши сотрудники</h2>
      <div className="employee__cards">
        <GalleryEmploee items={employees} />
      </div>
    </section>
  );
};

export default Employee;
