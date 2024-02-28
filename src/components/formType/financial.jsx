import { Box, Typography, Button ,Backdrop } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function Financial() {
    const options = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };  
  const [financialFields, setFinancialFields] = useState({
    waste_management: "",
    carbon_emission: "",
    energy_usuage: "",
    water_usuage: "",
    biodiversity_impact: "",
  });
  const [loader, setLoader] = useState(false);
  const LoaderClose = () => {
    setLoader(false);
  };
  const LoaderOpen = () => {
    setLoader(true);
  };
  const handleChange = (e) => {
    setFinancialFields({ ...financialFields, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    LoaderOpen()
    const finacialPyaload={
        waste_management:financialFields.waste_management,
        carbon_emission:financialFields.carbon_emission,
        energy_usuage:financialFields.energy_usuage,
        water_usuage:financialFields.water_usuage,
        biodiversity_impact:financialFields.biodiversity_impact
    }
    
    //dummy api call
    axios
    .post(
      `https://dummy.restapiexample.com/api/v1/create`,
      JSON.stringify(finacialPyaload),
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
              Waste Management <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
            </Typography>
            <TextField
              required={true}
              type="number"
              onKeyDown={handleKeyDown}
              sx={{
                background: "#f9fafb",
                borderRadius: "5px",
                width: { lg: 355, xs: 280, sm: 300, md: 420 },
              }}
              size="small"
              name="waste_management"
              value={financialFields.waste_management}
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
              Carbon Emissions <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
            </Typography>
            <TextField
              required={true}
              type="number"
              onKeyDown={handleKeyDown}
              sx={{
                background: "#f9fafb",
                borderRadius: "5px",
                width: { lg: 355, xs: 280, sm: 300, md: 420 },
              }}
              size="small"
              name="carbon_emission"
              value={financialFields.carbon_emission}
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
              Energy Usage <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
            </Typography>
            <TextField
              required={true}
              type="number"
              onKeyDown={handleKeyDown}
              sx={{
                background: "#f9fafb",
                borderRadius: "5px",
                width: { lg: 355, xs: 280, sm: 300, md: 420 },
              }}
              size="small"
              name="energy_usuage"
              value={financialFields.energy_usuage}
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
              Water Usage <span style={{ color: "red" }}>*</span><span style={{ fontSize:"12px",marginLeft:"2px" }}>(numeric value only)</span>
            </Typography>
            <TextField
              required={true}
              type="number"
              onKeyDown={handleKeyDown}
              sx={{
                background: "#f9fafb",
                borderRadius: "5px",
                width: { lg: 355, xs: 280, sm: 300, md: 420 },
              }}
              size="small"
              name="water_usuage"
              value={financialFields.water_usuage}
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
              Biodiversity Impact <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              required
              type="text"
              sx={{
                background: "#f9fafb",
                borderRadius: "5px",
                width: { lg: 355, xs: 280, sm: 300, md: 420 },
              }}
              size="small"
              name="biodiversity_impact"
              value={financialFields.biodiversity_impact}
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
  );
}
