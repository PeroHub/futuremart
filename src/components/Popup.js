
import React, { useState } from 'react';

// import { useState } from 'react';

import {Dialog, DialogTitle, DialogContent, Container, Grid, Stack, Button} from '@mui/material'; 
import { Typography, FormControl, Box, InputLabel, Select, MenuItem} from '@mui/material'; 
import ImageFrame from '../components/ImageFrame';
import ButtonMain from '../components/ButtonMain';
// import {futureProducts} from '.././products';

import { useNavigate } from 'react-router-dom';

const initialState = {
    color: '',
    size: ''
}

function Popup(props) {

   const [ userWant, setUserWant]   = useState(initialState)

   const handleChange = (event) => {
       setUserWant(prev => ({
           ...prev, [event.target.name]: event.target.value
       }))
   }

   console.log(userWant)

   const [ quantity, setQuantity ] = useState(0)

   const increment = () => {
    setQuantity(prev => prev + 1)
   }

   const decrement = () => {
    setQuantity(prev => prev - 1)
   }

    const {openPopup, setOpenPopup, dialogData, handleClose} = props;

    
   // Add new key to the object
    dialogData.color = userWant.color
    dialogData.size = userWant.size
    dialogData.quantity = quantity

    let arr = []
    arr = dialogData
    
  
 

    const [ final, setFinal]   = useState([])

    let navigate = useNavigate()
   
    const handleAddToChart = () => {
        // validate that user has select what they want
        setFinal(dialogData)
        navigate("/savedproducts")
       setQuantity(0)
    }
    
    localStorage.setItem('userWant', JSON.stringify(final))
    
    
    
    
   
   
    
    
    return(
            <Dialog open={openPopup} onClose={handleClose} >



function Popup(props) {

   

    const {openPopup, setOpenPopup, dialogData} = props;
    
    return(
            <Dialog open={openPopup}  >

                <DialogTitle  sx={{backgroundColor:"#F2F4F7"}}>
                    <Button onClick={()=> setOpenPopup(false)}>X</Button>

                </DialogTitle>

                <DialogContent  dividers sx={{backgroundColor:"#F2F4F7"}}>
                    
                    <Grid container >

                        <Grid items xs={12} sm={12} md={6} sx={{  display:"flex", flexDirection:"row", justifyContent:"center"}}>

                        <Grid items xs={12} sm={12} md={6} sx={{ border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center"}}>

                            <Stack spacing={4}>
                                <Typography variant="h5" sx={{fontWeight:"3rem"}}>FutureLabs Polo</Typography>
                                <ImageFrame  width={"170px"} height={"170px"} image={dialogData?.image} />
                                <Button  variant="contained" size="large" sx={{backgroundColor:"#ED8204", borderRadius:"none", height:"120px"}} >{dialogData?.price}</Button>

                            </Stack>
                        

                        </Grid>

                        <Grid items xs={12} sm={12} md={6} sx={{ display:"flex", flexDirection:"row", justifyContent:"center", p:5}}>

                        <Grid items xs={12} sm={12} md={6} sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", p:5}}>

                            <Stack spacing={8.5}>
                                <Stack>
                                    <Typography variant="p">Please Select:</Typography>
                                    <Typography variant="h6">Color</Typography>
                                    <Box>
                                    <FormControl sx={{  minWidth: 120 }} size="small">
                                        <InputLabel>Color</InputLabel>
                                        <Select
                                            label="Age"

                                            name="color"
                                            onChange={handleChange}
                                        >
                                          
                                            
                                           
                                            <MenuItem value='orange'>Blue</MenuItem>
                                            <MenuItem value='white'>White</MenuItem>
                                            <MenuItem value='yellow'>Yellow</MenuItem>

                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Blue</MenuItem>
                                            <MenuItem value={20}>White</MenuItem>
                                            <MenuItem value={30}>Yellow</MenuItem>

                                        </Select>
                                        </FormControl>
                                    </Box>
                                </Stack>


                                <Stack>
                                    <Typography variant="h6">Size</Typography>
                                    <Box>
                                    <FormControl sx={{ minWidth: 120 }} size="small">
                                        <InputLabel>Size</InputLabel>
                                        <Select
                                            label="Age"

                                            name="size"
                                            onChange={handleChange}
                                            value={userWant?.size}
                                        >
                                            
                                            
                                            
                                            <MenuItem value='small'>Small</MenuItem>
                                            <MenuItem value='medium'>Medium</MenuItem>
                                            <MenuItem value='large'>Large</MenuItem>

                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Small</MenuItem>
                                            <MenuItem value={20}>Medium</MenuItem>
                                            <MenuItem value={30}>Large</MenuItem>

                                        </Select>
                                        </FormControl>
                                    </Box>
                                </Stack>



                                
                                <Stack>
                                    <Typography variant="h6">Quantity</Typography>
                                    <Box>

                                        <Stack direction="row" spacing={1} > 
                                        <Button variant={"outlined"} onClick={increment}> + </Button>
                                        
                                        <Typography sx={{mt: 2}}>{quantity}</Typography>
                                        <Button variant={"outlined"} onClick={decrement} > -</Button>
                                        </Stack>

                                    <Stack direction="row" spacing={1} > <ButtonMain variant={"outlined"}  text={"-"} height={"25px"} width={"5px"}/><ButtonMain variant={"text"}  text={"1"} height={"25px"} width={"5px"} /><ButtonMain variant={"outlined"}  text={"+"} height={"25px"} width={"5px"}/></Stack>

                                    </Box>
                                </Stack>


                            </Stack>
                            



                            

                        </Grid>
                    </Grid>
                    
                        <Box  sx={{border:"1px solid red", display:"flex", justifyContent:"center", mt:3}}>

                            <Stack direction="row" spacing={3}>
                                {/* <ButtonMain variant={"contained"} size={"medium"} width={"10rem"} height={"45px"} text={"Add to Cart"}/>
                            <ButtonMain variant={"outlined"} size={"medium"} text={"Cancel"} width={"10rem"} onClick={handleClose} height={"45px"}/> */}
                            <Button variant="contained" onClick={handleAddToChart}>Add To Cart</Button>
                            <Button variant="contained" onClick={handleClose}>Cancel</Button>

                            <Stack direction="row" spacing={3}><ButtonMain variant={"contained"} size={"medium"} width={"10rem"} height={"45px"} text={"Add to Cart"}/><ButtonMain variant={"outlined"} size={"medium"} text={"Cancel"} width={"10rem"} height={"45px"}/></Stack>

                        </Box>
                                     
                    {/* <Box sx={{border:"1px solid red", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", justifyContent:"center" }}> 
                        <Box sx={{border:"1px solid red", width:"50%"}}>
                        <ImageFrame  width={"170px"} height={"170px"}  />
                            
                        </Box>
                        <Box sx={{border:"1px solid red", width:"50%"}}>
                        <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} ></Button>
                        </Box>
                        <Box sx={{border:"1px solid red", width:"50%"}}>
                        <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} ></Button>
                        </Box>
                        <Box sx={{border:"1px solid red", width:"50%"}}>
                        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                        </Box>
                    </Box> */}
                </DialogContent>

            </Dialog>

        

    );
}
export default Popup;





















































