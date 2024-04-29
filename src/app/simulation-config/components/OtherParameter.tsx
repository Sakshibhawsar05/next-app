import { Box ,Typography ,Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const OtherParameter = ()=>{
  return(
     <Box sx={{marginTop:'5%'}}>
     <Typography sx={{ marginTop: "20px", fontWeight:'bold', marginBottom:"30px", paddingBottom:"15px"}}>
        Current Version-1.0
      </Typography>
      <Grid
        item
        //xs={3}
        container
        spacing={{ xs: 4}}
       columns={{ xs: 4, md: 12 }}
        sx={{ mb: "4%" ,marginTop:"30px",display:"flex",gap:"25px" , px:"8px" }}
        
      >
        <TextField id="standard-basic" label="Related Content Count " variant="standard" sx={{ml:'20px'}} defaultValue={10}/>
       <TextField id="standard-basic" label="Extra Related Count" variant="standard" sx={{ml:'10px' }} defaultValue={10}/>
        <TextField id="standard-basic" label="Max Related Count" variant="standard" sx={{ml:'10px'}} defaultValue={15}/>
        <TextField id="standard-basic" label="Span Replacement" variant="standard" sx={{ml:'10px'}} defaultValue={30} />
        <TextField id="standard-basic" label="R score cut Off" variant="standard" sx={{ml:'10px'}} defaultValue={0.4}/>
        <TextField id="standard-basic" label="Max Replacement Rate" variant="standard" sx={{ml:'10px'}} defaultValue={0.3} />
        <TextField id="standard-basic" label="Allow Topic Depth" variant="standard" sx={{ml:'10px'}} defaultValue={3}/>
        </Grid>
     </Box>
  )
}
export default OtherParameter;