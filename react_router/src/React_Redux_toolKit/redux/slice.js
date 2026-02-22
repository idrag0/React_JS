import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    clearUsers(state) {
      state.users = [];
    },
  },
});

export const { addUser, deleteUser, clearUsers } = userSlice.actions;
export default userSlice.reducer;
