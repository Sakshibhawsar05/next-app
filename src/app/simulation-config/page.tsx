"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTabPanel from './components/ CustomTabPanel';
import SimulationConNew from './components/SimulationConNew';
import Paper from '@mui/material/Paper';
import Stepper from './components/Stepper';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
  
    <Paper  square  sx={{ marginTop:'5%',   marginLeft:'20px' , marginRight:'25px' }} className=' px-4 py-4'>
    <Box sx={{  }}>
      <Box >
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example"  >
          <Tab label="Create" {...a11yProps(0)}  />
          <Tab label="New" {...a11yProps(1)}  />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {/*create section - stepper  */}
        <Stepper/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/*New section  */}
        <SimulationConNew/>
      </CustomTabPanel>
    
    </Box>
    </Paper>
  
  );
}