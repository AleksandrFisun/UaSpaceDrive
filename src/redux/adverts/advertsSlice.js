import { createSlice } from '@reduxjs/toolkit';
import advertsOperations from './advertsOperations';

const initialState = {
  car: [],
  allCar: [],
  adertsError: '',
  page: 1,
  openModal: false,
  idCar: null,
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(advertsOperations.getAdverts.fulfilled, (state, action) => {
      state.car = action.payload;
    });
    builder.addCase(advertsOperations.getAdverts.rejected, (state, action) => {
      state.adertsError = action.payload;
    });
    //

    builder.addCase(
      advertsOperations.getAdvertsMore.fulfilled,
      (state, action) => {
        state.car = [...state.car, ...action.payload];
      }
    );
    builder.addCase(
      advertsOperations.getAdvertsMore.rejected,
      (state, action) => {
        state.adertsError = action.payload;
      }
    );
    builder.addCase(
      advertsOperations.getAdvertsAll.fulfilled,
      (state, action) => {
        state.allCar = action.payload;
      }
    );
    builder.addCase(
      advertsOperations.getAdvertsAll.rejected,
      (state, action) => {
        state.adertsError = action.payload;
      }
    );
    builder.addCase(advertsOperations.modal.fulfilled, (state, action) => {
      state.idCar = action.payload.idCar;
      state.openModal = action.payload.OpenModal;
    });
  },
});

export default advertsSlice.reducer;
