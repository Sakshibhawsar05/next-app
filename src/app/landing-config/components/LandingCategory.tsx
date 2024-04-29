import { Box } from "@mui/material";
import CategoryStepper from "./Category/CategoryStepper";

const LandingCategory = () =>{
  return (
         <Box >
             <Box sx={{ px:'4%'}}>
             <CategoryStepper/>
             </Box>
         </Box>
  )
}

export default LandingCategory;