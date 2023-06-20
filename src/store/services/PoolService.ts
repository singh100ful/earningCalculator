import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiUrl} from '../../constants/ApiConstants';

const header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchPool = createAsyncThunk('pool/fetch', async () => {
  return fetch(apiUrl + '/all-pools', {
    method: 'GET',
    headers: header,
  })
    .then((response: any) => response.json())
    .then(data => {
      return data.data.pools;
    })
    .catch(err => {
      return err;
    });
});

export const getPool = createAsyncThunk('pool/get', async (params: string) => {
  return fetch(apiUrl + '/calculator-details/' + params, {
    method: 'GET',
    headers: header,
  })
    .then((response: any) => response.json())
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err;
    });
});

export const calculateFund = createAsyncThunk(
  'pool/calculate',
  async (params: CalcParams) => {
    return fetch(apiUrl + '/calculator-for-pool', {
      method: 'POST',
      headers: header,
      body: JSON.stringify(params),
    })
      .then((response: any) => response.json())
      .then(data => {
        const resultData = data.data.result.resultData;
        const formatted = {
          resultData: resultData[resultData.length - 1],
          absoluteReturns: data.data.result.absoluteReturns,
        };
        return formatted;
      })
      .catch(err => {
        return err;
      });
  },
);
