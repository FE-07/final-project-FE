import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState:{},
    reducers:{
        getUser: (state,action) => {
            state.data = {...action.payload}
        },
        addUser: (state, action) => {
            state.data = {...action.payload.userData}
        },
        removeUser: (state) => {
            state.data = null;
        },
    }
})


export default userSlice