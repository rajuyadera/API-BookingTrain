import { createSlice } from "@reduxjs/toolkit"

const pasenggerSlice = createSlice({
    name: "pasengger",
    initialState: {
        pasenggerTitle: "Nyonya",
        pasenggerName: "Alya Mutiara",
        pasenggerIdentityType: "",
        pasenggerNoIdentity: 0,
    },
    reducers: {
        updatePasengger: (state, action) => {
            state.pasenggerTitle = action.payload.pasenggerTitle
            state.pasenggerName = action.payload.pasenggerName
            state.pasenggerIdentityType = action.payload.pasenggerIdentityType
            state.pasenggerNoIdentity = action.payload.pasenggerNoIdentity
        }
    }
})

export const {updatePasengger} = pasenggerSlice.actions
export default pasenggerSlice.reducer