import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from 'next/router';

export const initialState = {
    userDetails: {},
    isLoggedIn: false,
    token: ''
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, actions) => {
            return {
                ...state,
                token: actions.payload.token,
                isLoggedIn: actions.payload.success,
                userDetails: actions.payload.userDetails
            }
        },
        handleLogOut: (state, actions) => {
            return initialState

        }
    }

}
);

export const { setUserDetails, handleLogOut } = UserSlice.actions;
export default UserSlice.reducer;