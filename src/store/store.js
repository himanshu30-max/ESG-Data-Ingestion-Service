import { configureStore } from "@reduxjs/toolkit";
import fileReducer from './reducers/fileSlice';

//initial state of the file upload component
const initialState = {
    files: localStorage.getItem("files")?JSON.parse(localStorage.getItem("files")):[]
   
  };
  
//store configuration
const store = configureStore({
    reducer: {
      files: fileReducer,
    },
    preloadedState: initialState,
  });

export default store;
