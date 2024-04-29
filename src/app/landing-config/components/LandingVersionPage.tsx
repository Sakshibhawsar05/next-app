"use client"
import { Box, Button, Typography, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import LandingCategory from "./LandingCategory";
import { useState } from "react";

interface Props {
  onGoBack: () => void; // Specify the type of onGoBack
}

const LandingVersionPage: React.FC<Props> = ({ onGoBack }) => {

  const [showCategory, setShowCategory] = useState(false);

  const handleAddCategory = () => {
    setShowCategory(true);
  };

  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", marginTop: "2%", marginBottom: "2%" }}
      >
        Current Version-1
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          margin: 2,
        }}
      >
        <Button variant="contained" disabled>
          Save Landing Page Config
        </Button>
        <Button variant="contained" disabled>
          Save And Trigger Simulation
        </Button>
      </Box>

      <Typography sx={{ color: "teal", ml: "5%" , fontWeight:'bold' }}> ADD A PAGE</Typography>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginTop: "4%" , gap:2}}
      >
        <Box sx={{ display:"flex" , gap:2 ,margin:2}}>
          <TextField id="id-basic" label="Page Id" variant="standard" />
          <TextField id="Name-basic" label="Page Name" variant="standard" />
          <TextField id="DFI-basic" label="DFI" variant="standard" defaultValue={0} />
          <TextField
            id="content-basic"
            label="Page Content"
            variant="standard"
            defaultValue='0'
          />
        </Box>

        <Box sx={{display:'flex' , gap:2}}>
          <Button variant="outlined"  onClick={handleAddCategory}>Add Category</Button>
          <Button variant="outlined">Save Page</Button>
          <Button variant="outlined">Remove Page</Button>
        </Box>
      </Box>

       {/* category section */}
      
       {showCategory && (
        <Box sx={{ marginTop: "4%" }}>
          <LandingCategory />
        </Box>
      )}

      <Button onClick={onGoBack} variant="outlined" sx={{marginTop:'4%'}}>Go Back</Button>

     
    </Box>
  );
};

export default LandingVersionPage;
