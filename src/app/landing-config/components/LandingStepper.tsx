import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button } from "@mui/material";
import Versionbtn from "./Versionbtn";
import LandingVersionPage from "./LandingVersionPage";

const LandingStepper = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [showVersionPage, setShowVersionPage] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleNextClick = () => {
    setShowVersionPage(true);
  };

  const handleGoBack = () => {
    setShowVersionPage(false);
  };

  return (
    <>
      {!showVersionPage && (
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "2%",
            mb: "2%",
            padding: "7px",
          }}
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Addnew"
              control={<Radio />}
              label="Add New Config"
            />
            <FormControlLabel
              value="Addfrom"
              control={<Radio />}
              label="Add from Existing Config"
            />
            <FormControlLabel
              value="edit"
              control={<Radio />}
              label="Edit Existing Config"
            />
          </RadioGroup>
        </FormControl>
      )}

      {!showVersionPage && (
        <Box  sx={{ display:'flex' , justifyContent:'center' , alignItems:'center'}}>
          <Versionbtn></Versionbtn>
        </Box>
      )}

      {!showVersionPage && ( // Render Next button only if showVersionPage is false
        <Box>
          <Button
            onClick={handleNextClick}
            sx={{
              ml: 10,
              px: 3,
              borderRadius: 1,
              color: "white",
              bgcolor: "#00897b",
              "&:hover": {
                bgcolor: "#00796b",
              },
            }}
          >
            Next
          </Button>
        </Box>
      )}

      {showVersionPage && <LandingVersionPage onGoBack={handleGoBack} />}
    </>
  );
};

export default LandingStepper;
