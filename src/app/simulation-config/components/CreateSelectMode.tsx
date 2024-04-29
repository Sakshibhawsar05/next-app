import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography ,Box} from '@mui/material';


const CreateSelectMode = () =>{
  return(
    <Box   className="  px-5">
      <Typography sx={{marginTop:'2% ', mb:'2%',fontWeight:'bold'}} >Current version-1.0</Typography>
    <FormControl sx={{display:'flex' , justifyContent:'center',alignItems:'center'}}>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="config" control={<Radio />} label="Add New Config" />
      <FormControlLabel value="Existing" control={<Radio />} label="Add From Existing Config" />
      <FormControlLabel value="fromExisiting" control={<Radio />} label="Add From Existing Simulation" />
      <FormControlLabel value="EditExisting" control={<Radio />} label="Edit Existing Config" />
    </RadioGroup>
  </FormControl>
    </Box>
    
    
  )
}
export default CreateSelectMode;