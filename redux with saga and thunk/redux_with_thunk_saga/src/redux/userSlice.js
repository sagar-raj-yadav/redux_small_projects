import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  user:[],
   error:null,
   loading:false,
}

export const fetchUser=async(dispatch)=>{
    dispatch(setLoading(true));
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(setUser(response.data));
    }catch(error){
        dispatch(setError(error));
    }
}


export const sendUser=(userData)=>async(dispatch)=>{
    dispatch(setLoading(true));
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users', userData);
        dispatch(addUser(response.data));
        dispatch(setUser(response.data));
    }catch(error){
        dispatch(setError(error));
    }
}


 const userSlice = createSlice({
  name: 'user',
  initialState:initialState,
  reducers: {
   setUser:(state,action)=>{
    state.user=action.payload;
   },
   addUser:(state,action)=>{
    state.user.push(action.payload);
   },
   setLoading:(state,action)=>{
    state.loading=action.payload;
   },
   setError:(state,action)=>{
    state.error=action.payload;
   }



  },
})

export const {setUser, addUser, setLoading, setError  } = userSlice.actions

export default userSlice.reducer