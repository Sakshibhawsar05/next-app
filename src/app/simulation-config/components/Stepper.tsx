import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateSelectMode from "./CreateSelectMode";
import RatingWeight from "./RatingWeight";
import Exponenial from "./Exponenial";
import QulityWeight from "./QualityWeight";
import OtherParameter from "./OtherParameter";
import StepFinished from "./StepFinished";
import { teal } from "@mui/material/colors";
import { useTheme } from "@mui/system";

const steps = [
  "select creation mode",
  "Add rating weight",
  "Add Exponenial weight",
  "Add Qulity Weight ",
  "Add other Parameters",
];

// Create a custom theme

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const theme = useTheme();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //active step handler- show step content
  // active step handler - show step content
  const activeStepHandler = (step: number): React.ReactNode => {
    if (step === 1) {
      return <CreateSelectMode />;
    } else if (step === 2) {
      return <RatingWeight />;
    } else if (step === 3) {
      return <Exponenial />;
    } else if (step === 4) {
      return <QulityWeight />;
    } else {
      return <OtherParameter />;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} className=" px-4 mx-5">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 1 }}>
            <StepFinished />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {/* <Box sx={{ flex: '1 1 auto' }} /> */}
            <Button
              onClick={handleReset}
              sx={{ border: "1px solid teal", margin: "2px" }}
            >
              Reset
            </Button>
          </Box>
          <Box sx={{ mt: "2%" }}>
            <Typography
              className=" mb-7  font-bold"
              sx={{ mb: "10px", fontWeight: "bold" }}
            >
              Current version - 1.0
            </Typography>
            <Typography>Unknown step index</Typography>
          </Box>
          <Box className="flex  items-center gap-2 mt-6">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, border: "1px solid" }}
            >
              Back
            </Button>

            <Button
              sx={{
                mr: 1,
                border: "1px solid",
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStepHandler(activeStep + 1)}{" "}
          {/* Render CreateSelectMode directly */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              marginTop: "8px",
              gap: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, border: "1px solid" }}
            >
              Back
            </Button>
            {/* <Box sx={{ flex: '1 1 auto' }} /> */}
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button
              onClick={handleNext}
              className=" b    "
              sx={{
                color: "white",
                bgcolor: "#00897b",
                "&:hover": {
                  bgcolor: "#00796b",
                },
              }}
            >
              {activeStep === steps.length - 1
                ? "Save Simulation Config"
                : "Next"}
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#00897b",
                  "&:hover": {
                    bgcolor: "#00796b",
                  },
                }}
              >
                Save & Trigger Simulation Config
              </Button>
            ) : null}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
