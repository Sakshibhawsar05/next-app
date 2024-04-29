"use client"
import { Box } from "@mui/material";
import { Paper, Tab, Tabs } from "@mui/material";
import CustomTabPanel from "@/app/simulation-config/components/ CustomTabPanel";
import { useState } from "react";
import LandingStepper from "./LandingStepper";
import LandingNew from "./LandingNew";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LandingTabpanel = ()=>{
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return(
      <Box>
       <Paper square >
        <Tabs variant="fullWidth" value={value} onChange={handleChange} >
          <Tab label="Create" {...a11yProps(0)} />
          <Tab label="View" {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0} >
            <LandingStepper/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1} >
          <LandingNew/>
        </CustomTabPanel>


      </Paper>
      </Box>
  )
}
export default LandingTabpanel;