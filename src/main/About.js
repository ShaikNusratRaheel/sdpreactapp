import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


export default function About() {
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

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Motto of Acadamex
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Acadamex is a Student Course Management System is an innovative
            online tool designed to enhance the educational experience in
            engineering colleges.
          </Typography>
          <Typography gutterBottom>
            Serving as a central hub, it connects administrators, faculty, and
            students seamlessly. This digital platform promotes efficient
            collaboration, creating an ecosystem for precise information
            management
          </Typography>
          <Typography gutterBottom>
            It improves the overall learning journey and helps in fostering
            improved communication.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
      <h3 align="center">
        <Button onClick={handleClickOpen}>About Acadamex</Button>
      </h3>

      <p>
        {" "}
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
