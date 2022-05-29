import {Container, Grid, Card, Box, Typography, Button, Avatar} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'; 
import ButtonMain from '../ButtonMain';
import { useNavigate } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function SavedProducts() {
    let result = localStorage.getItem('userWant')
    let final = JSON.parse(result)
    console.log(final)

    const navigate = useNavigate()
    const handleNav = () => {
        navigate("/checkout")
    }

    // <Button sx={{background: "red"}} variant="contained">REMOVE</Button>
    // <Button>{final.price}</Button>

    // <Box mt={5}>
    // <ButtonMain variant={"contained"} size={"medium"} width={"10rem"} height={"45px"} mt={"5px"} text={"Procedd to Checkout"}/>
    // <Button onClick={handleNav}>Proceed To Checkout</Button>
    // </Box>
    return(
        <>
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"80%", md:"80%"}}} >
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} sx={{border:"1px solid yellow", background:"#FAFCFD", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", p:10 }}>
                        <Card sx={{display:{xs:"block", md:"flex"}, height:{ xs:"70", md:"40vh"}, width:{xs:"80vw", sm:"80%", md:"90%"},border:"1px solid blue"}}>
                            <Box sx={{ border:"1px solid red", height:{xs:"30vh", md:"inherit"}, width:{xs:"100%", md:"30vw"}, display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Avatar sx={{height:"190px", width:"190px"}}><img src={final.image}/></Avatar>
                            </Box>
                            <Box sx={{ border:"1px solid red", height:"inherit", width:{xs:"100%", md:"60%"}}}>
                                <TableContainer   sx={{overflow:"hidden",height:"100%", border:"6x solid yellow"}} >
                                    <Table sx={{border:"6x solid red", height:"100%", display:"flex", flexDirection:"column" }}>
                                        <TableHead sx={{border:"6x solid blue", width:"100%"}}>
                                            <TableRow sx={{border:"6x solid blue", width:"100%"}}>
                                                <TableCell sx={{borderBottom:"none"}}><Typography variant="h5" sx={{fontWeight:"3rem", border:"1px solid red"}}>FutureLabs Polo</Typography></TableCell>
                                            </TableRow> 
                                        </TableHead>
                                        <TableBody sx={{border:"6x solid blue", height:"80%", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                            <TableRow sx={{border:"6x solid blue", width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">(white)</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right"><Button variant="outlined" size="3px"> 2</Button> </TableCell>
                                            </TableRow>
                                            <TableRow mt={50} >
                                                <TableCell  align="left"><Button variant="text" sx={{color:"red", width:"100%", borderBottom:"none"}} size="50px">REMOVE</Button></TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}}  align="right"><Button variant="text"  size="50px">{final.price}</Button> </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                                            
                            </Box>
                        {/* <Box sx={{border:"1px solid blue", width:"100%", display:"flex", flexDirection:"row", justifyContent:"end"}}>    
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
                        
                        </Box> */}
                        </Card>
                        <Box pt={2} sx={{border:"1px solid green", width:"90%", height:"10vh", dislay:"flex", flexDirection:"column", justifyContent:"end", alignItems:"end"}}>
                            <Button variant={"contained"} onClick={handleNav}>Proceed To Checkout</Button>
                        </Box>


                    </Grid>
                    
                </Grid>


         




            </Container>
        </>

    );
}
export default SavedProducts