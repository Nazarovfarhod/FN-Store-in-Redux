import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    haveUser: (state) => {
      if (state.user) {
        state.user = false;
      } else {
        state.user = true;
      }
    },
  },
});

export const { haveUser } = userSlice.actions;
export default userSlice.reducer;
