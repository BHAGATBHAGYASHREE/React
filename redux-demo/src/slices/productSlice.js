import { createSlice } from '@reduxjs/toolkit';
export const productSlice= createSlice({
    name:"product",
    initialState:{
   value:[]
    },
    reducers:{
        addProduct:(state,action) => {
            state.value=action.payload

        }
        }

    })
        export const{addProduct}= productSlice.actions
        export default productSlice.reducer