import {Container, Grid, Card, Box, Typography, Button, Avatar} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'; 
// import ButtonMain from '../ButtonMain';
import { useNavigate } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function Cardcomponent() {
    let result = localStorage.getItem('userWant')
    let final = JSON.parse(result)
    console.log(final)

    const navigate = useNavigate()
    const handleNav = () => {
        navigate("/checkout")
    }

    const remove = () => {
        localStorage.removeItem('userWant')
        navigate("/product")
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
                    <Grid item xs={12} sm={12} md={12} sx={{ background:"#FAFCFD", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", p:10 }}>
                        <Card sx={{display:{xs:"block", md:"flex"}, height:{ xs:"70", md:"40vh"}, width:{xs:"80vw", sm:"80%", md:"90%"}}}>
                            <Box sx={{ height:{xs:"30vh", md:"inherit"}, width:{xs:"100%", md:"30vw"}, display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Avatar sx={{height:"190px", width:"190px"}}><img src={final.image} alt="chart"/></Avatar>
                            </Box>
                            <Box sx={{  height:"inherit", width:{xs:"100%", md:"60%"}}}>
                                <TableContainer   sx={{overflow:"hidden",height:"100%", border:"6x solid yellow"}} >
                                    <Table sx={{border:"6x solid red", height:"100%", display:"flex", flexDirection:"column" }}>
                                        <TableHead sx={{border:"6x solid blue", width:"100%"}}>
                                            <TableRow sx={{border:"6x solid blue", width:"100%"}}>
                                                <TableCell sx={{borderBottom:"none"}}><Typography variant="h5" sx={{fontWeight:"3rem"}}>{final.cetegory}</Typography></TableCell>
                                            </TableRow> 
                                        </TableHead>
                                        <TableBody sx={{ height:"80%", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                            <TableRow sx={{ width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">Size</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right">{final.size}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">Color</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right">{final.color}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{border:"6x solid blue", width:"100%"}}>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="left">quantity</TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}} align="right"><Button variant="outlined" size="3px">{final.quantity} </Button> </TableCell>
                                            </TableRow>
                                            <TableRow mt={50} >
                                                <TableCell  align="left"><Button variant="text" onClick={remove} sx={{color:"red", width:"100%", borderBottom:"none"}} size="50px">REMOVE</Button></TableCell>
                                                <TableCell sx={{width:"100%", borderBottom:"none"}}  align="right"><Button variant="text"  size="50px">N{final.price}</Button> </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                                            
                            </Box>
                        
                        </Card>
                        <Box pt={2} sx={{ width:"90%", height:"10vh", dislay:"flex", flexDirection:"column", justifyContent:"end", alignItems:"end"}}>
                            <Button fullWidth variant={"contained"} onClick={handleNav}>Proceed To Checkout</Button>
                        </Box>


                    </Grid>
                    
                </Grid>


         




            </Container>
        </>

    );
}
export default Cardcomponent
