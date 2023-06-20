import {createSlice} from '@reduxjs/toolkit';
import {calculateFund, fetchPool, getPool} from '../services/PoolService';

const initialState: PoolState = {
  loading: {
    pool: false,
    poolDetail: false,
    calculate: false,
  },
  error: {
    poolErr: null,
    poolDetailErr: null,
    calculateErr: null,
  },
  pool: [],
  poolDetail: null,
  calculate: null,
};

export const poolSlice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    resetCalculate: state => {
      state.loading.calculate = false;
      state.error.calculateErr = null;
      state.calculate = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPool.pending, state => {
        state.loading.pool = true;
        state.error.poolErr = null;
        state.pool = [];
      })
      .addCase(fetchPool.rejected, (state, action: any) => {
        state.loading.pool = false;
        state.error.poolErr = action.payload;
        state.pool = [];
      })
      .addCase(fetchPool.fulfilled, (state, action: any) => {
        state.loading.pool = false;
        state.error.poolErr = null;
        state.pool = action.payload;
      })
      .addCase(getPool.pending, state => {
        state.loading.poolDetail = true;
        state.error.poolDetailErr = null;
        state.poolDetail = null;
      })
      .addCase(getPool.rejected, (state, action: any) => {
        state.loading.poolDetail = false;
        state.error.poolDetailErr = action.payload;
        state.poolDetail = null;
      })
      .addCase(getPool.fulfilled, (state, action: any) => {
        state.loading.poolDetail = false;
        state.error.poolDetailErr = null;
        state.poolDetail = action.payload;
      })
      .addCase(calculateFund.pending, state => {
        state.loading.calculate = true;
        state.error.calculateErr = null;
        state.calculate = null;
      })
      .addCase(calculateFund.rejected, (state, action: any) => {
        state.loading.calculate = false;
        state.error.calculateErr = action.payload;
        state.calculate = null;
      })
      .addCase(calculateFund.fulfilled, (state, action: any) => {
        state.loading.calculate = false;
        state.error.calculateErr = null;
        state.calculate = action.payload;
      });
  },
});

export const {resetCalculate} = poolSlice.actions;
export const poolReducer = poolSlice.reducer;
export default poolSlice.reducer;
