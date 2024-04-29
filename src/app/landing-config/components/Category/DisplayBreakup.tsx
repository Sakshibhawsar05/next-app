import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const type = [
  { 
     value:'1',
    label: 'Query',
  },]

const DisplayBreakup = () =>{
  return(
          
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop:'4%' , display:'flex' , justifyContent:'center' , alignItems:'center'
    }}
    noValidate
    autoComplete="off"
  >
    
      <TextField
        id="outlined-select-currency"
        select
        label="Display Breakup"
        defaultValue='1'
        
      >
        {type.map((option , index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
  </Box>
  )
}

export default DisplayBreakup;