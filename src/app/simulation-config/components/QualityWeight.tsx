import { Box ,Typography ,Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const QulityWeight = ()=>{
  return(
     <Box sx={{marginTop:'5%'}}>
     <Typography sx={{ marginTop: "20px",  fontWeight:'bold' , marginBottom:"30px", paddingBottom:"15px"}}>
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
        <TextField id="standard-basic" label="Num Top Dcs Result " variant="standard" sx={{ml:'20px'}} defaultValue={80}/>
        <TextField id="standard-basic" label="DCS Score" variant="standard" sx={{ml:'10px' , fontSize:'1px'}} defaultValue={1.2}/>
        <TextField id="standard-basic" label="Conversion Score" variant="standard" sx={{ml:'10px'}} defaultValue={2}/>
        <TextField id="standard-basic" label="Predicated Primary Score" variant="standard" sx={{ml:'10px'}} defaultValue={1.5}/>
        </Grid>
     </Box>
  )
}
export default QulityWeight;