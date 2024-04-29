import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const RatingWeight = () => {
  return (
    <Box sx={{marginTop:"25px" ,py:"8px" , display:'flex' , flexDirection:'column'}}>
      <Typography sx={{ marginTop: "20px", fontWeight:'bold' , marginBottom:"30px", paddingBottom:"15px"}}>
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
        <TextField id="standard-basic" label="Conversion score" variant="standard" sx={{ml:'20px'}}  defaultValue={3.5} />
        <TextField id="standard-basic" label="Predicated Trafic Score" variant="standard" sx={{ml:'10px' , fontSize:'1px'}}  defaultValue={0}/>
        <TextField id="standard-basic" label="Trafic Score" variant="standard" sx={{ml:'10px'}} defaultValue={1.5}/>
        <TextField id="standard-basic" label="Trafic Log Value" variant="standard" sx={{ml:'10px'}}  defaultValue={105}/>
        <TextField id="standard-basic" label="Actual Trafic Panalazation Depath Cut Off" variant="standard" sx={{ml:'10px'}}  defaultValue={5}/>

        <TextField id="standard-basic" label="Predicted Primary Region Score" variant="standard"  sx={{ml:'20px'}} defaultValue={10}/>
        <TextField id="standard-basic" label="Crawl Score" variant="standard" sx={{ml:'10px'}}  defaultValue={12}/>
        <TextField id="standard-basic" label="Min Visit" variant="standard" sx={{ml:'10px'}}  defaultValue={10}/>
        <TextField id="standard-basic" label="Primary Visit" variant="standard" sx={{ml:'10px'}}  defaultValue={5}/>
        <TextField id="standard-basic" label="Uncrawled Papers Priority" variant="standard" sx={{ml:'10px'}} defaultValue={0.8}/>
        <TextField id="standard-basic" label="Priority Papers" variant="standard" sx={{ml:'20px'}} defaultValue={1.5}/>
        <TextField id="standard-basic" label="Payment Score" variant="standard" sx={{ml:'10px'}} defaultValue={7}/>
        <TextField id="standard-basic" label="Bounce Score" variant="standard" sx={{ml:'10px'}}  defaultValue={0.3}/>
      </Grid>
    </Box>
  );
};

export default RatingWeight;
