import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeList(state){
            return state;
        }
    }
  })
  
export default configureStore({
  reducer: {
    user: user.reducer
   }
}) 