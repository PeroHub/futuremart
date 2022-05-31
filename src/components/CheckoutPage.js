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
// import Cardcomponent from "./home/card";
// import Payment from "./CheckoutComponent/Payment";
import Review from "./CheckoutComponent/Review";
import PersonalDetails from "./CheckoutComponent/PersonalDetails";

import FluterwaveButton from "./FlutterwaveButton";

import {Card, Avatar} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'; 

// import { useNavigate } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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

    // Mapping to card
    let result = localStorage.getItem('userWant')
    let final = JSON.parse(result)
    console.log(final)



    
    
    return ( 
       <>
        <Box sx={{ display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", width: {xs: "100%", md: "100%"}, margin: "0 auto"}}>
            <Box  sx={{order: 2, p:3, pt:{md:21}, display:"flex", flexDirection:"column", height:"100%", backgroundColor:"#FAFCFD"}}>
            <Card sx={{display:{xs:"block", md:"flex"}, height:{ xs:"70", md:"40vh"}, width:{xs:"100vw", sm:"100%", md:"100%"}}}>
                            <Box sx={{ pt:{xs:7, md:0},height:{xs:"30vh", md:"inherit"}, width:{xs:"100%", md:"30vw"}, display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", textAlign:"center"}}>
                                <Avatar sx={{height:"190px", width:"190px"}}><img src={final.image} alt="checkout"/></Avatar>
                                <Button  variant="contained" size="large" sx={{backgroundColor:"#ED8204", borderRadius:"none", mt:{xs:1.5, md:0} }} >{final.price}</Button>
                            </Box>
                            <Box sx={{height:"inherit", width:{xs:"100%", md:"60%"}}}>
                                <TableContainer   sx={{overflow:"hidden",height:"100%", p:{xs:8, md:0}}} >
                                    <Table sx={{height:"100%", display:"flex", flexDirection:"column" }}>
                                        <TableHead sx={{width:"100%"}}>
                                            <TableRow sx={{width:"100%"}}>
                                                <TableCell sx={{borderBottom:"none"}}><Typography variant="h5" sx={{fontWeight:"3rem"}}>{final.cetegory}</Typography></TableCell>
                                            </TableRow> 
                                        </TableHead>
                                        <TableBody sx={{ height:"80%", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", p:2 }}>
                                            <TableRow sx={{width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">Size</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right">{final.size}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">Color</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right">{final.color}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">Quantity</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right"><Button variant="outlined" >{final.quantity}</Button> </TableCell>
                                            </TableRow>
                                            <TableRow mt={50} >
                                                <TableCell sx={{ width:"100%", borderBottom:"none", color:"red"}}  align="left">REMOVE</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}}  align="right"><Button variant="text" >{final.price}</Button> </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                                            
                            </Box>
                        
                        </Card>
                        
              
            </Box>
            <Box sx={{ maxWidth: {xs: "100%", md: "100%"} }}>
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