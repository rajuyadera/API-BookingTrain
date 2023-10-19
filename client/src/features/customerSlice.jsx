import {createSlice} from "@reduxjs/toolkit"

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customerTitle: "Tuan",
        customerName: "Raju Yadera",
        customerIdentityType: "",
        customerNoIdentity: 0,
        noTelp: 0,
        email: "",
        address: ""
    },
    reducers: {
        updateCustomer: (state, action) => {
            state.customerTitle = action.payload.customerTitle
            state.customerName = action.payload.customerName
            state.customerIdentityType = action.payload.customerIdentityType
            state.customerNoIdentity = action.payload.customerNoIdentity
            state.noTelp = action.payload.noTelp
            state.email = action.payload.email
            state.address = action.payload.address
        }
    }
})

export const {updateCustomer} = customerSlice.actions

export default customerSlice.reducer