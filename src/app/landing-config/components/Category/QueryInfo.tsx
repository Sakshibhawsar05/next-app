import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const QueryInfo = () =>{
  const [info, setInfo] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setInfo(event.target.value as string);
  };


  return(
       <Box sx={{marginTop:'4%' , display:'flex' , justifyContent:'space-evenly', alignItems:'center'  , }}>
        <Box >
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">QueryList</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={info}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
           <Box sx={{  '& .MuiTextField-root': { m: 1, width: '35ch' },}} >
           <TextField id="standard-basic" label="Max Count" variant="standard" fullWidth />
           </Box>
       </Box>
  )
}

export default QueryInfo;