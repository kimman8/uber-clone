import { createSlice } from '@reduxjs/toolkit';

// these 3 things below are called selectors
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// preparing the data layer
export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {
  setTravelTimeInformation,
  setDestination,
  setOrigin,
} = navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
