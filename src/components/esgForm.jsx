import {Box} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Financial from './formType/financial';
import Sensor from './formType/sensor';
import UserType from './formType/userType';

export default function ESGForm() {
    const [formType, setFormType] = useState('');

  const handleChange = (event) => {
    setFormType(event.target.value);
  };
  return (
    <>
    <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center",mb:2 }}>
        <Box sx={{width:{lg:"50%",xs:"100%",sm:"100%",md:"50%"}}}>
        <FormControl fullWidth size='small'>
        <InputLabel id="demo-select-small-label">ESG Data Type</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          size='small'
          sx={{textAlign:"left"}}
          value={formType}
          label="ESG Data Type"
          onChange={handleChange}
        >
          <MenuItem value={"Financial"}>Finalcial</MenuItem>
          <MenuItem value={"Sensor"}>Sensor</MenuItem>
          <MenuItem value={"User Input"}>User Input</MenuItem>
        </Select>
      </FormControl>
        </Box>
    </Box>
    <Box sx={{mt:4}}>
        
            {formType=="Financial" && <Financial/>}
            {formType=="Sensor" && <Sensor/>}
            {formType=="User Input" && <UserType/>}
    </Box>
    </>
  )
}
