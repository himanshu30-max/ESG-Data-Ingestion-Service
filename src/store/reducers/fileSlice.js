import { createSlice } from '@reduxjs/toolkit';

//getStoredData function to get the file Data from local Storage
const getStoredData = () => {
    const storedData = localStorage.getItem('files');
    return JSON.parse(storedData) || [];
  };

const fileSlice = createSlice({
  name: 'files',
  initialState: getStoredData(),
  reducers: {
    //addfile reducer to add the new file the state
    addFile: (state, action) => {
    const updatedState = [...state, action.payload];
      localStorage.setItem('files', JSON.stringify(updatedState));
      return updatedState;
    },
    //remove file reducer to remove the file from the state
    removeFile: (state, action) => {
      const updatedArray= state.filter((file, index) => index !== action.payload);
      localStorage.setItem("files",JSON.stringify(updatedArray))
      return updatedArray
    },
  },
});

export const { addFile, removeFile } = fileSlice.actions;
export default fileSlice.reducer;
