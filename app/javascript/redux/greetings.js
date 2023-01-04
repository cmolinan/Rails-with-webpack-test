import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "api/v1/greetings";

export const fetchingGreeting = createAsyncThunk(
  "greeting/fetchingGreeting",
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
);

const greetingReducer = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    Greeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchingGreeting.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { Greeting } = greetingReducer.actions;
export default greetingReducer.reducer;
