import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload; // Ensure the payload is the user object.
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
