'use client'
import React from "react";
import { Button, Switch, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Start = () => {
  const values =[
   { label: 'IPL' },
  { label: 'ANT'},
  { label: 'HELL' },
  ]

  return (
    <div className=" h-screen flex justify-center items-center  gap-2 md:gap-14 ">
      <form action="/action_page.php" className=" px-5">
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={values}
      sx={{ width: 130 }}
      renderInput={(params) => <TextField {...params} placeholder="IPL"  ></TextField> } 
    ></Autocomplete>
      </form>

      <div className=" flex items-center  px-5">
          <Switch defaultChecked />
          <Typography>Devepolyment mode</Typography>
      </div>

      <div className=" px-5">
      <Button variant="contained" className=" bg-teal-800  hover:bg-teal-700" >Initialize</Button>
      </div>
    </div>
  );
};

export default Start;
