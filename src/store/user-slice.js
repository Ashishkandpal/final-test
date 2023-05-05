import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
    postDetails: [],
    getDetails: [],
  },
  reducers: {
    getInputName(state, action) {
      state.username = action.payload;
    },
    getInputPassword(state, action) {
      state.password = action.payload;
    },
    addPostDetails(state, action) {
      state.postDetails = action.payload;
    },
    addGetDetails(state, action) {
      state.getDetails = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
