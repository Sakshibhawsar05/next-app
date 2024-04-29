import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Versionbtn = () =>{
  const [version, setversion] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setversion(event.target.value as string);
  };
  return(
    <Box >
    <FormControl sx={{ minWidth: 100 }}>
      <InputLabel id="demo-simple-select-label">Version</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={version}
        label="Age"
        onChange={handleChange}
        size='small'
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </FormControl>
    
  </Box>
  )
}

export default Versionbtn