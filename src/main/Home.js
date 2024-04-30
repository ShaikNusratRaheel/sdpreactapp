import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Home() {
  const theme = useTheme();


  const images = [
    {
      label: "Acadamex",
      imgPath: "https://source.unsplash.com/featured/?education",
    },
    {
      label: "Acadamex",
      imgPath: "https://source.unsplash.com/featured/?books",
    },
    {
      label: "Acadamex",
      imgPath: "https://source.unsplash.com/featured/?blackboard",
    },
    {
      label: "Acadamex",
      imgPath: "https://source.unsplash.com/featured/?library",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <h3 align="center">Student Course Management System</h3>
      <p>
        At AcademeX, we understand the importance of seamless course management.
        That's why we've crafted a user-friendly environment packed with
        powerful features to streamline every aspect of your academic
        experience. From course registration to accessing resources,
        communicating with peers, and tracking your progress, we've got you
        covered every step of the way. Our team is dedicated to providing you
        with the best possible experience, prioritizing security, accessibility,
        and innovation. Whether you're accessing the platform from your
        computer, tablet, or smartphone, you can trust that your data is safe
        and your experience is optimized for your device.
      </p>

      <Box sx={{ maxWidth: 1800, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontStyle: "italic" }}>
            {images[activeStep].label}
          </Typography>
        </Paper>

       
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}
