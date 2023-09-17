import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6502c41ba0f2c1f3faead390.mockapi.io';

const getAdvertsAll = createAsyncThunk(
  `/adverts`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const getAdverts = createAsyncThunk(
  `/adverts/limit`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts?page=${1}&limit=8`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const getAdvertsMore = createAsyncThunk(
  `/adverts/page`,
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=8`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const modal = createAsyncThunk(`/modal`, async (modal, { rejectWithValue }) => {
  try {
    return modal;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const advertsOperations = {
  getAdverts,
  getAdvertsMore,
  getAdvertsAll,
  modal,
};

export default advertsOperations;
