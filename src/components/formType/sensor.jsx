import {Box,Typography,Backdrop,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function Sensor() {
  const options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
const [sensorFields, setsensorFields] = useState({
  air_quality: "",
  water_quality: "",
  soil_quality: "",
  temperature: "",
  noise_level: "",
});
const [loader, setLoader] = useState(false);
const LoaderClose = () => {
setLoader(false);
};
const LoaderOpen = () => {
setLoader(true);
};
const handleChange = (e) => {
setsensorFields({ ...sensorFields, [e.target.name]: e.target.value });
};
const handleSubmit = (event) => {
event.preventDefault();
LoaderOpen()
const sensorPyaload={
    air_quality:sensorFields.air_quality,
    water_quality:sensorFields.water_quality,
    soil_quality:sensorFields.soil_quality,
    temperature:sensorFields.temperature,
    noise_level:sensorFields.noise_level
}

//dummy api call
axios
.post(
  `https://dummy.restapiexample.com/api/v1/create`,
  JSON.stringify(sensorPyaload),
  options
).then((res)=>{
    LoaderClose()
    if(res.status==200){
        toast.success(res.data.message)
    }
    else{
        toast.error('Something Went Wrong Please try again after Some Time')
    }
    
}).catch((error)=>{
  LoaderClose()
  console.log(error,"file upload api error")
  toast.error('Something Went Wrong Please try again after Some Time')
})

};
const handleKeyDown = (event) => {
  // Prevent 'e', '+', '-', and '.' from being entered
  if (["e", "E", "+", "-", "."].includes(event.key)) {
    event.preventDefault();
  }
};
  return (
    <>
    <form onSubmit={handleSubmit}>
     <Grid container spacing={3}>
                <Grid item lg={4} >
                    <Box>
                    <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#000",
                            
                            textAlign: "left",
                          }}
                        >
                          Air Quality <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
                        </Typography>
                        <TextField
                        required={true}
                          type="number"
                          sx={{ background: "#f9fafb", borderRadius: "5px",width: {lg:355,xs:280,sm:300,md:420}}}
                          size="small"
                          name="air_quality"
                          onKeyDown={handleKeyDown}
                          value={sensorFields.air_quality}
                          onChange={handleChange}
                        />
                    </Box>
        
            
                </Grid>
                <Grid item lg={4}>
        
                <Box>
                    <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#000",
                            
                            textAlign: "left",
                          }}
                        >
                          Water Quality <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
                        </Typography>
                        <TextField
                        required={true}
                          type="number"
                          sx={{ background: "#f9fafb", borderRadius: "5px",width: {lg:355,xs:280,sm:300,md:420}}}
                          size="small"
                          name="water_quality"
                          onKeyDown={handleKeyDown}
                          value={sensorFields.water_quality}
                          onChange={handleChange}
                        />
                    </Box>
                </Grid>
                <Grid item lg={4}>
        
                <Box>
                    <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#000",
                            
                            textAlign: "left",
                          }}
                        >
                          Soil Quality <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField
                        required={true}
                          type="text"
                          sx={{ background: "#f9fafb", borderRadius: "5px",width: {lg:355,xs:280,sm:300,md:420}}}
                          size="small"
                          name="soil_quality"
                          value={sensorFields.soil_quality}
                          onChange={handleChange}
                        />
                    </Box>
                </Grid>
                <Grid item lg={4}>
        
                <Box>
                    <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#000",
                            
                            textAlign: "left",
                          }}
                        >
                          Temperature <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
                        </Typography>
                        <TextField
                        required={true}
                          type="number"
                          onKeyDown={handleKeyDown}
                          sx={{ background: "#f9fafb", borderRadius: "5px",width: {lg:355,xs:280,sm:300,md:420}}}
                          size="small"
                          name="temperature"
                          value={sensorFields.temperature}
                          onChange={handleChange}
                        />
                    </Box>
            </Grid>
            <Grid item lg={4}>
        
            <Box>
                    <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "#000",
                            
                            textAlign: "left",
                          }}
                        >
                         Noise Level <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField
                        required={true}
                          type="text"
                          sx={{ background: "#f9fafb", borderRadius: "5px",width: {lg:355,xs:280,sm:300,md:420}}}
                          size="small"
                          name="noise_level"
                          value={sensorFields.noise_level}
                          onChange={handleChange}
                        />
                    </Box>
            </Grid>
               </Grid>
               <Box sx={{mt:2,display:"flex",justifyContent:"flex-end"}}>
       <Button type='submit' variant="contained">
                  Submit
       </Button>
       </Box>
               </form>
               <Backdrop
  sx={{
    color: "#fff",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  }}
  open={loader}
>
  <CircularProgress color="inherit" />
</Backdrop>
<Toaster />
    </>
  )
}
