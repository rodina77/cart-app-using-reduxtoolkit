import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchproducts =createAsyncThunk("productSlice/fetchproducts",async()=>{
 const res=await fetch("https://fakestoreapi.com/products");
 const data =await res.json();
 return data;
})

export const productSlice = createSlice({
  name: 'productSlice',
  initialState :[],
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchproducts.fulfilled,(state,action)=>{
      return action.payload;
    })
  }
})

export const {}= productSlice.actions;
export default productSlice.reducer;