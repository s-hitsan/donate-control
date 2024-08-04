import { createSlice } from '@reduxjs/toolkit';
import { AidType } from '@/types';
import {
  addNewAid,
  fetchAids,
  fetchAidsTotalCount,
} from '@/store/slices/aids/operations';

interface UsersState {
  list: AidType[];
  isLoading: boolean;
  isAidAdding: boolean;
  totalCount: number;
}

const initialState: UsersState = {
  list: [],
  isLoading: false,
  isAidAdding: false,
  totalCount: 0,
};

const handlePending = (state: UsersState) => {
  state.isLoading = true;
};

const handleAidAddPending = (state: UsersState) => {
  state.isAidAdding = true;
};

export const aidsSlice = createSlice({
  name: 'aids',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAids.pending, handlePending)
      .addCase(fetchAids.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list.push(...action.payload);
      })

      .addCase(fetchAidsTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      })
      .addCase(addNewAid.pending, handleAidAddPending)
      .addCase(addNewAid.fulfilled, (state, action) => {
        state.isAidAdding = false;
        state.list.unshift(action.payload);
      });
  },
});

export default aidsSlice.reducer;
