import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';

const CategoryDetails = () =>{
  return(
             <Box  sx={{marginTop:'4%'}}  >
                    <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:4 , my:'2%'}}>
                    <TextField id="filled-basic" label="Category Id" variant="outlined" />
                    <TextField id="filled-basic" label="Category Name" variant="outlined" />
                    <TextField id="filled-basic" label="Order" variant="outlined"   defaultValue='0' />
                    </Box>
             </Box>
  )
}

export default CategoryDetails;