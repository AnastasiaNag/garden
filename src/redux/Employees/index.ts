import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CounterState, IEmployee } from './types';
import axios from 'axios';
import { BASE_URL } from '../../utils';

const initialState: CounterState = {
  value: 0,
  employees: [],
  id: [],
  employee: {
    id: '',
    title: '',
    text: '',
    img: '',
  },
};

export const counterSlice = createSlice({
  name: 'Article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(getEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      const deletedPostId = action.payload;
      state.employees = state.employees.filter((item) => item.id !== deletedPostId);
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(editEmployee.fulfilled, (state, action) => {
      const { updatedEmployee } = action.payload;
      state.employees = state.employees.map((item) => (item.id === updatedEmployee.id ? updatedEmployee : item));
    });
  },
});

export default counterSlice.reducer;

export const getEmployees = createAsyncThunk('employees/get', async (): Promise<IEmployee[]> => {
  const employees = (await axios.get(BASE_URL + '/employees')).data;
  return employees;
});
export const getEmployee  = createAsyncThunk('employee/getEmployee', async (itemId: string | number | null): Promise<IEmployee> => {
  const employee = (await axios.get(BASE_URL + `/employees/${itemId}`)).data;
  return employee;
});

export const deleteEmployee = createAsyncThunk('employee/delete', async (itemId: string): Promise<string> => {
  await axios.delete(BASE_URL + `/employees/${itemId}`);
  return itemId;
});

export const addEmployee = createAsyncThunk('employee/add', async (payload: Partial<IEmployee>): Promise<IEmployee> => {
  const newEmployee = (await axios.post(BASE_URL + '/employees', payload)).data;
  return newEmployee;
});

export const editEmployee = createAsyncThunk('employee/edit', async (data: { formValues: any; itemId: string | number }) => {
    const { formValues, itemId } = data;
    await axios.put(BASE_URL + `/employees/${itemId}`, formValues);
    const updatedEmployee = (await axios.get(BASE_URL + `/employees/${formValues.id}`)).data;
    return {updatedEmployee};
});