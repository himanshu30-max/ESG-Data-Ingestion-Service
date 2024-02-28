import { Box, Button,Backdrop } from "@mui/material";
import "./fileUpload.css";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { addFile, removeFile } from '../../store/reducers/fileSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CircularProgress from "@mui/material/CircularProgress";

export default function FileUploadNew() {

  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);

  const [loader, setLoader] = useState(false);
  const LoaderClose = () => {
    setLoader(false);
  };
  const LoaderOpen = () => {
    setLoader(true);
  };

//file upload function
  const fileUploadHandler = (event) => {
    
    const selectedFile = event.target.files[0];
    if(!selectedFile){
      toast.error("Please upload the file");
      return
    }
    LoaderOpen()
    const formData = new FormData();
    formData.append(
        "newFile",
        selectedFile,
        selectedFile.name
    )
    axios({
      method: "post",
      url: `https://dummy.restapiexample.com/api/v1/create`, //dummy api route 
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
        .then((res) => {
          if (res.status == 200) {
            LoaderClose()
            dispatch(addFile(selectedFile));
            toast.success("File Uploaded Successfully");
          } else {
            LoaderClose()
            toast.error("Something Went Wrong Please try again after Some Time");
          }
            
        })
        .catch((error) => {
          LoaderClose()
          console.log(error,"error in upload file api")
            toast.error("Something Went Wrong Please try again after Some Time");
        });
}
//remove file function
const handleRemoveFile = (index) => {
  dispatch(removeFile(index));
};
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          className="file-card"
          sx={{ minWidth: { lg: "380px", xs: "300px" } }}
        >
          <Box className="file-inputs">
            <input type="file"  accept=".pdf, .png, .jpg, .jpeg" onChange={fileUploadHandler} />
            <Button>
              <i>
                <CloudUploadIcon />
              </i>
              Upload
            </Button>
          </Box>

          <p className="main">Supported files</p>
          <p className="info">PDF, JPG, PNG, JPEG</p>
        </Box>
      </Box>

      <Box
     className="list"
      >
      <ul>
          {files.map((file, index) => (
            <li className="fileList" key={index}>
               
              <Box sx={{display:"flex"}}>
                <InsertDriveFileIcon />
                <p className="title">{file.name}</p> 
              </Box>
              <DeleteIcon sx={{cursor:"pointer"}} onClick={() => handleRemoveFile(index)}>Remove</DeleteIcon>
            </li>
          ))}
        </ul>
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loader}
      >
        <CircularProgress color="inherit" /> Your file is uploading please wait
      </Backdrop>
      <Toaster />
    </>
  );
}
