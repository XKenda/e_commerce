import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
    name: "auth",
    initialState:{
        username: "",
        password: "",
        email: "",
        loggedIn: false,
    },
    reducers: {
        setInfo: (state, action)=>{
            state.username = action.payload.username
            state.password = action.payload.password
            state.email =  action.payload.email
        },
        setLoggidIn: (state, action)=>{
            state.loggedIn = action.payload
        }
    }
})

export const {setInfo, setLoggidIn} = Auth.actions
export default Auth.reducer