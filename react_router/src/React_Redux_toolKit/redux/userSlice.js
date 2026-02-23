 import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react';


 export const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers :{
      addUser(state, action){},
      deleteUser(state, action){},
      removeUser(state, action){},
    }
 });

 console.log(userSlice);



 export default userSlice.reducer;