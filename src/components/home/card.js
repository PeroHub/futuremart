import {Container, Grid, Card, Box, Typography, Button} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'; 
import ButtonMain from '../ButtonMain';
import { useNavigate } from 'react-router-dom';
function SavedProducts() {
    let result = localStorage.getItem('userWant')
    let final = JSON.parse(result)
    console.log(final)

    const navigate = useNavigate()
    const handleNav = () => {
        navigate("/checkout")
    }
    return(
        <>
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"80%", md:"80%"}, mt: 8 }} >
                <Grid container sx={{background:"#FAFCFD"}}>
                    <Grid item xs={6} md={12} sx={{border:"1px solid red", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", height:"60vh"}}>
                        <Card sx={{display:"flex", height:"30vh", width:"60%"}}>
                        <Box sx={{border:"1px solid blue", width:"100%", display:"flex", flexDirection:"row", justifyContent:"end"}}>    
                            <Box sx={{border:"1px solid red", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <Box sx={{textAlign:"left"}}>
                                    <Typography variant="h5" sx={{fontWeight:"3rem", border:"1px solid red"}}>{final.cetegory}</Typography>
                                    <Box sx={{border:"1px solid red" }}>
                                        <Grid container>
                                            <Grid item xs={1} md={6}>
                                                <Typography variant="p" sx={{fontWeight:"3rem"}}>{final.category}</Typography>

                                            </Grid>
                                            
                                            <Grid item xs={1} md={6} sx={{ mt:{xs:5, sm:0, md:0} }}>
                                                
                                               
                                            </Grid>
                                            
                                            <img src={final.image} alt="cloth" />
                                        </Grid>    
                                    </Box>

                                </Box> 
        

                                <Box sx={{border:"1px solid red", width:"100%", display:"flex", alignItems:"end" }}>
                                    <Box sx={{border:"1px solid red", display:"flex", width:"100%", justifyContent:"space-between"}}>
                                        
                                        <Button sx={{background: "red"}} variant="contained">REMOVE</Button>
                                        <Button>{final.price}</Button>

                                    </Box>
                                </Box>
                                
                            </Box>
                        
                        </Box>
                        </Card>
                        <Box mt={5}>
                        <ButtonMain variant={"contained"} size={"medium"} width={"10rem"} height={"45px"} mt={"5px"} text={"Procedd to Checkout"}/>
                        <Button onClick={handleNav}>Proceed To Checkout</Button>
                        </Box>


                    </Grid>
                    {/* <Grid item xs={6} md={2}> */}
                    {/* <Stack spacing={8.5}>
                                <Stack>
                                    <Typography variant="p">Please Select:</Typography>
                                    <Typography variant="h6">Color</Typography>
                                    <Box>
                                    <FormControl sx={{  minWidth: 120 }} size="small">
                                        <InputLabel sx={{border:"#CCCCCC"}} >Color</InputLabel>
                                        <Select
                                            label="Age"
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
                                    <Stack direction="row" spacing={1} > <ButtonMain variant={"outlined"} border={"#CCCCCC"}   text={"-"} height={"25px"} width={"5px"} bg={"#FFFFFF"}/><ButtonMain variant={"text"} border={"#CCCCCC"} text={"1"} height={"25px"} width={"5px"} /><ButtonMain variant={"outlined"}  text={"+"} height={"25px"} width={"5px"} border={"#CCCCCC"} /></Stack>
                                    </Box>
                                </Stack>


                            </Stack>
                             */}

{/* 
                    </Grid> */}
                </Grid>


            {/* Second row */}
            {/* <Grid container mt={5} sx={{background:"#FAFCFD"}}>
                    <Grid item xs={6} md={8} sx={{border:"1px solid red", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", height:"60vh"}}>
                        <Card sx={{display:"flex", height:"30vh", width:"60%", display:"flex" }}>
                        <Box sx={{border:"1px solid blue", width:"100%", display:"flex", flexDirection:"row", justifyContent:"end"}}>    
                            <Box sx={{border:"1px solid red", width:"60%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <Box sx={{textAlign:"left"}}>
                                    <Typography variant="h5" sx={{fontWeight:"3rem", border:"1px solid red"}}>FutureLabs Polo</Typography>
                                    <Stack direction="row" spacing={15} sx={{border:"1px solid red"}}>
                                        <Typography variant="p" sx={{fontWeight:"3rem"}}>(Black)</Typography>
                                        <ButtonMain variant={"outlined"}  bg={"#FAFCFD"} text={"1"} height={"10px"} size={"3"} border={"#CCCCCC"} width={"0px"}/>
                                    </Stack>

                                </Box> 
        

                                <Box sx={{border:"1px solid red", width:"100%", display:"flex", alignItems:"end" }}>
                                    <Stack direction="row" spacing={10}>
                                        <ButtonMain variant={"text"} size={"medium"} width={"5rem"} height={"45px"} color={"red"} text={"REMOVE"}/>
                                        <ButtonMain variant={"text"} size={"medium"} width={"5rem"} height={"45px"} color={"#949494"} text={"N2000"}/>

                                    </Stack>
                                </Box>
                                
                            </Box>
                        
                        </Box>
                        </Card>
                        <Box mt={5}>
                        <ButtonMain variant={"contained"} size={"medium"} width={"10rem"} height={"45px"} mt={"5px"} text={"Add to Cart"}/>
                        </Box>


                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={8.5}>
                                <Stack>
                                    <Typography variant="p">Please Select:</Typography>
                                    <Typography variant="h6">Color</Typography>
                                    <Box>
                                    <FormControl sx={{  minWidth: 120 }} size="small">
                                        <InputLabel sx={{border:"#CCCCCC"}} >Color</InputLabel>
                                        <Select
                                            label="Age"
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
                                    <Stack direction="row" spacing={1} > <ButtonMain variant={"outlined"} border={"#CCCCCC"}   text={"-"} height={"25px"} width={"5px"} bg={"#FFFFFF"}/><ButtonMain variant={"text"} border={"#CCCCCC"} text={"1"} height={"25px"} width={"5px"} /><ButtonMain variant={"outlined"}  text={"+"} height={"25px"} width={"5px"} border={"#CCCCCC"} /></Stack>
                                    </Box>
                                </Stack>


                            </Stack>
                            


                    </Grid>
                </Grid> */}




            </Container>
        </>

    );
}
export default SavedProducts