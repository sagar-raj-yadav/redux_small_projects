import { createSlice,PayloadAction } from '@reduxjs/toolkit'


// Define cart product type
interface Cart {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity?: number; // Optional because quantity will be added later
  }
  
  // Define the state type for the cart
  interface CartState {
    cart: Cart[];
  }
  
  // Initial state
  const initialState: CartState = {
    cart: [],
  };


const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addTocart:(state,action: PayloadAction<Cart>)=>{
        const item=action.payload;

        //if product already present in the cart
        const existingproduct=state.cart.find((product)=>product.id===item.id);
        if(existingproduct)
        {
            existingproduct.quantity! += 1;
        }
        //else push the product into the cart
        else{
        state.cart.push({...item,quantity:1});
        }
    },
    removefromCart:(state,action: PayloadAction<{ id: number }>)=>{
        state.cart = state.cart.filter((item) => item.id !== action.payload.id); 
    }
  }
})

export const { addTocart,removefromCart} = cartSlice.actions;
export default cartSlice.reducer;