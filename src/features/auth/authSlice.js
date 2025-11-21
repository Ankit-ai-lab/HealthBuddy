import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      const u = action.payload;

      // store only serializable values
      state.user = u
        ? {
            uid: u.uid,
            email: u.email,
            displayName: u.displayName || null,
            photoURL: u.photoURL || null,
          }
        : null;

      state.loading = false;
      state.error = null;
    },

    setLoading(state) {
      state.loading = true;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setError, setLoading, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
