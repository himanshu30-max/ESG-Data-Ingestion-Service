import { Box, Typography, Backdrop, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function UserType() {
  const options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const [userInputFields, setuserInputFields] = useState({
    sustainability_practices: "",
    carbon_footprint_reduction: "",
    renewable_energy_usuage: "",
    comunity_engagement: "",
    corporate_governance: "",
  });
  const [loader, setLoader] = useState(false);
  const LoaderClose = () => {
    setLoader(false);
  };
  const LoaderOpen = () => {
    setLoader(true);
  };
  const handleChange = (e) => {
    setuserInputFields({ ...userInputFields, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    LoaderOpen();
    const UserPyaload = {
      sustainability_practices: userInputFields.sustainability_practices,
      carbon_footprint_reduction: userInputFields.carbon_footprint_reduction,
      renewable_energy_usuage: userInputFields.renewable_energy_usuage,
      comunity_engagement: userInputFields.comunity_engagement,
      corporate_governance: userInputFields.corporate_governance,
    };

    //dummy api call
    axios
      .post(
        `https://dummy.restapiexample.com/api/v1/create`,
        JSON.stringify(UserPyaload),
        options
      )
      .then((res) => {
        LoaderClose();
        if (res.status == 200) {
          toast.success(res.data.message);
        } else {
          toast.error("Something Went Wrong Please try again after Some Time");
        }
      }).catch((error)=>{
        LoaderClose()
        console.log(error,"file upload api error")
        toast.error('Something Went Wrong Please try again after Some Time')
      })
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
                Sustainability Practices <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required={true}
                type="text"
                sx={{
                  background: "#f9fafb",
                  borderRadius: "5px",
                  width: { lg: 355, xs: 280, sm: 300, md: 420 },
                }}
                size="small"
                name="sustainability_practices"
                value={userInputFields.sustainability_practices}
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
                Carbon Footprint Reduction{" "}
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required={true}
                type="text"
                sx={{
                  background: "#f9fafb",
                  borderRadius: "5px",
                  width: { lg: 355, xs: 280, sm: 300, md: 420 },
                }}
                size="small"
                name="carbon_footprint_reduction"
                value={userInputFields.carbon_footprint_reduction}
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
                Renewable Energy Usage <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required={true}
                type="text"
                sx={{
                  background: "#f9fafb",
                  borderRadius: "5px",
                  width: { lg: 355, xs: 280, sm: 300, md: 420 },
                }}
                size="small"
                name="renewable_energy_usuage"
                value={userInputFields.renewable_energy_usuage}
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
                Community Engagement <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required={true}
                type="text"
                sx={{
                  background: "#f9fafb",
                  borderRadius: "5px",
                  width: { lg: 355, xs: 280, sm: 300, md: 420 },
                }}
                size="small"
                name="comunity_engagement"
                value={userInputFields.comunity_engagement}
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
                Corporate Governance <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required={true}
                type="text"
                sx={{
                  background: "#f9fafb",
                  borderRadius: "5px",
                  width: { lg: 355, xs: 280, sm: 300, md: 420 },
                }}
                size="small"
                name="corporate_governance"
                value={userInputFields.corporate_governance}
                onChange={handleChange}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained">
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
