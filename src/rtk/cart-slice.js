import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const cartslice = createSlice({
  name: 'cartslice',
  initialState :[],
  reducers: {
    addTocart:(state,action)=>{
      const findproduct = state.find((product)=> product.id=== action.payload.id);
      if(findproduct)
      {
        findproduct.quantity+=1;
         
      }else
      {
        const productClone= {...action.payload,quantity:1}
        state.push(productClone);
      }
    
    },
    deleteFromcart:(state,action)=>{
      return state.filter((product)=> product.id != action.payload.id)
    },
    clear:(state,action)=>{
      return []
    },
  },
})

export const {addTocart,deleteFromcart,clear}= cartslice.actions;
export default cartslice.reducer;