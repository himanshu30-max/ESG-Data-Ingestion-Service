import "./App.css";
import FileUploadNew from "./components/fileUpload/fileUploadNew";
import { useState } from "react";
import { Typography, Box, Paper, Tabs, Tab, CardMedia } from "@mui/material";
import ESG_Logo from "./assets/ESG_logo.png";
import ESGForm from "./components/esgForm";
function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Tab panel function which render the tab componet on the basis on index and value
  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      {/* ESG LOGO section start */}
      <Box
        sx={{
          width: { lg: "30%", xs: "100%" },
          display: { lg: "block", xs: "flex", sm: "block", md: "block" },
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <CardMedia
          component="img"
          image={ESG_Logo}
          alt="ESG_LOGO"
          sx={{ width: "150px" }}
        />
      </Box>

      {/* ESG Logo Section end */}

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: "6px",
            width: { lg: "90%", xs: "95%" },
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            {/* Tabs section start */}
            <Tabs
              orientation="horizontal"
              onChange={handleChange}
              value={value}
            >
              <Tab
                value={0}
                sx={{ textAlign: "left" }}
                label="ESG File Upload"
              ></Tab>
              <Tab value={1} sx={{ textAlign: "left" }} label="ESG Form"></Tab>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FileUploadNew />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ESGForm />
          </TabPanel>
          {/* Tabs section end */}
        </Paper>
      </Box>
    </>
  );
}

export default App;
