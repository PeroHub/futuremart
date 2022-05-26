import React, { useState } from "react"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Footer from "./home/Footer";
import Shipping from "./CheckoutComponent/Shipping";
// import Payment from "./CheckoutComponent/Payment";
import Review from "./CheckoutComponent/Review";
import PersonalDetails from "./CheckoutComponent/PersonalDetails";

import FluterwaveButton from "./FlutterwaveButton";

const steps = [
    {
      label: 'Shipping',
      description: <Shipping />,
    },
    {
      label: 'Personal Details',
      description: <PersonalDetails />,
    },
    {
      label: 'Review',
      description: <Review />,
    },
    {
      label: 'Payment',
      description: <FluterwaveButton />,
    },
  ];

function CheckoutPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };


    // let result = localStorage.getItem('userWant')
    
    return ( 
       <>
        <Box sx={{ display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", width: {xs: "100%", md: "80%"}, margin: "0 auto"}}>
            <Box sx={{order: 2}}>
              
            </Box>
            <Box sx={{ maxWidth: {xs: "100%", md: "100%"}, border: "1px solid red" }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                            optional={
                                index === 3 ? (
                                <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                            >
                            {step.label}
                            </StepLabel>
                            <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                                <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                                </div>
                            </Box>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                        </Paper>
                    )}
            </Box>
           
        </Box>
        <Footer />
       </>
        
     );
}

export default CheckoutPage;