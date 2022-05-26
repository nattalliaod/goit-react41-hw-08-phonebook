import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from 'redux/auth/auth-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
    }
});

const authSliceReducer = authSlice.reducer;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSliceReducer
);