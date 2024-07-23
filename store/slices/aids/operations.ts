import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AddAidInput } from '@/types';

axios.defaults.baseURL = `${process.env.EXPO_PUBLIC_API_URL}/aids`;

export const fetchAids = createAsyncThunk(
  'aids/fetchAll',
  async (page: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `/?${page ? `skip=${(page - 1) * 10}` : ''}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const fetchAidsTotalCount = createAsyncThunk(
  'aids/totalCount',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/total-count');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const addNewAid = createAsyncThunk(
  '/aids/push',
  async (fields: AddAidInput, thunkAPI) => {
    try {
      const response = await axios.post('', fields);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
