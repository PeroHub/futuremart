import { useState } from 'react';
import { Container, Grid, Card, CardMedia, Button, Typography, Box } from '@mui/material';
import { CardActions, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageFrame from '../ImageFrame';
import {futureProducts} from '../../products';
import ButtonMain from '../../components/ButtonMain';

// Second grid avatar images
import signup from '../../images/signup.png';
import shop from '../../images/shop.png';
import checkout from '../../images/checkout.png';
import waitfordelivery from '../../images/waitfordelivery.png';

// fourth grid image
import fourthgridpicture from '../../images/fourthgridpicture.png';

// Companies Who Trust Us Avatar Images
import CWTU1 from '../../images/CWTU1.png';
import CWTU2 from '../../images/CWTU2.png';
import CWTU3 from '../../images/CWTU3.png';
import CWTU4 from '../../images/CWTU4.png';

// Seventh grid image
import seventhgridimage from '../../images/seventhgridimage.png';

// People Who Shop On FutureMart Images
import PWSOFM1 from '../../images/PWSOFM1.png';
import PWSOFM2 from '../../images/PWSOFM2.png';
import PWSOFM3 from '../../images/PWSOFM3.png';
import PWSOFM4 from '../../images/PWSOFM4.png';





function Main() {
    const[products, setproducts] = useState(futureProducts);
        return ( 
        <>
            
            {/* First Grid Our products */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"80%", md:"80%"} }}>
                <Box >
                    <Typography sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Our Products</Typography>

                </Box>
                        
                
                <Grid container spacing={6} columns={12} mt={1} sx={{ border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center"}} >
                
                    {products.map((product) =>(
                    <Grid item xs={12} sm={12} md={4} key={product.id}>
                
                        <Card xs={12} sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                            <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >{product.price}</Button>
                            <CardMedia  sx={{  display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                                <Box sx={{ display:"flex", border:"1px solid red", width:"100%", height:"40vh", alignItems:"center", justifyContent:"space-around"}}>
                                    <ImageFrame border={"10px solid #0D08FF"} p={30} width={"170px"} height={"170px"} padding={"50px"} image={product.image}/>
                                    <ImageFrame border={"9px solid #0D08FF"} width={"70px"} height={"70px"}  />
                                </Box>
                                
                            </CardMedia>
                        </Card>
                        <Card sx={{height:"17vh"}}>
                        <Typography mt={2} sx={{textAlign:"center", fontFamily:"Quando", color:"#333333", fontSize:"1rem", lineHeight:{md:"1.5rem"}, fontWeight:"bold"}}>{product.cetegory}</Typography>
                        <CardActions sx={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"end"}}>
                        {/* <FavoriteBorderIcon sx={{width:"19%", height:"19px"}}/> */}
                            
                            <Button variant="outlined" size="small" disabled sx={{width:"46%", borderRadius:"3px", textTransform:"none", fontSize:"75%", mt:{md:3.5} }} startIcon={<FavoriteIcon sx={{color:"#B0B0B0"}}/>}> Save</Button>
                            <Button variant="outlined" size="small" disabled sx={{width:"46%", borderRadius:"3px", textTransform:"none", fontSize:"75%", mt:{md:3.5} }} startIcon={<ShoppingCartIcon sx={{color:"#B0B0B0"}}/>}> Add to Cart </Button>
                            
                            
                        </CardActions>
                        </Card>
                
                                                
                    </Grid>
                    ))} 
            </Grid>
            <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <ButtonMain variant={"outlined"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} /> 
            </Box>

            
            
            
            {/* Second Grid: How to shop on Future Mart */}
            <Grid container columns={12} mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={12} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"center"}}  >
                    <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">How To Shop On Future Mart</Typography>
                </Grid>
            </Grid>
            
            <Grid container  spacing={10} columns={12} >
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                    <Typography>Sign Up</Typography>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={signup}>
                        </Avatar> 
                    </Box>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography>Shop</Typography>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={shop}>
                        </Avatar>
                    </Box>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography>Check Out</Typography>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={checkout}>
                        </Avatar>
                    </Box>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography>Wait for Delivery </Typography>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={waitfordelivery}>
                        </Avatar>
                    </Box>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                
            </Grid>
        </Container>


        
        {/* backgroundColor:"#ED8204" */}
        {/*Third grid: You will look fabulous */}
        <Box mt={10} sx={{border: "1px solid red", backgroundColor:"#ED8204", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap", justifyContent:{xs:"center", sm:"center", md:"center"}, alignItems:{xs:"center", sm:"center", md:"center"}}}>          
            <Box sx={{border: "1px solid red", width: {xs: "100%", md: "40%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={fourthgridpicture} alt="" sx={{width:"50px"}}/>
            </Box>
            <Box sx={{border: "1px solid red",textAlign: "center",  width: {xs: "100%", md: "50%"}, display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{border: "1px solid red", textAlign:{xs:"center", sm:"center", md:"start"}, width:"70%", display:"block", flexDirection:"column" }}>
                    <Typography sx={{color:"white", fontWeight:"bold", fontSize:"2.5rem"}} variant="h5">You’ll look good and <br/>fabulous on our swags.  </Typography>
                    <br></br>
                    <Button variant="contained" size="small" sx={{textTransform:"none", width:"200px", height:"50px", borderRadius:"5px"}}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
        
              
               
               
          
        {/* Fourth grid:Featured products */}
        <Container maxWidth="lg" sx={{width:"80%"}}>
            <Typography mt={15} sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Featured Products</Typography>
            
            <Grid container spacing={6} columns={12} mt={1} sx={{ border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center"}} >
                
                {products.map((product) =>(
                <Grid item xs={12} sm={12} md={4} key={product.id}>
            
                    <Card xs={12} sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                        <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >{product.price}</Button>
                        <CardMedia  sx={{  display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                            <Box sx={{ display:"flex", border:"1px solid red", width:"100%", height:"40vh", alignItems:"center", justifyContent:"space-around"}}>
                                <ImageFrame border={"10px solid #0D08FF"} p={30} width={"170px"} height={"170px"} padding={"50px"} image={product.image}/>
                                <ImageFrame border={"9px solid #0D08FF"} width={"70px"} height={"70px"}  />
                            </Box>
                            
                        </CardMedia>
                    </Card>
                    <Card sx={{height:"17vh"}}>
                    <Typography mt={2} sx={{textAlign:"center", fontFamily:"Quando", color:"#333333", fontSize:"1rem", lineHeight:{md:"1.5rem"}, fontWeight:"bold"}}>{product.cetegory}</Typography>
                    <CardActions sx={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"end"}}>
                    {/* <FavoriteBorderIcon sx={{width:"19%", height:"19px"}}/> */}
                        
                        <Button variant="outlined" size="small" disabled sx={{width:"46%", borderRadius:"3px", textTransform:"none", fontSize:"75%", mt:{md:3.5} }} startIcon={<FavoriteIcon sx={{color:"#B0B0B0"}}/>}> Save</Button>
                        <Button variant="outlined" size="small" disabled sx={{width:"46%", borderRadius:"3px", textTransform:"none", fontSize:"75%", mt:{md:3.5} }} startIcon={<ShoppingCartIcon sx={{color:"#B0B0B0"}}/>}> Add to Cart </Button>
                        
                        
                    </CardActions>
                    </Card>
            
                                            
                </Grid>
                ))} 
        </Grid>
        <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
            <ButtonMain variant={"outlined"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} /> 
        </Box>


            {/* Fifth grid: Companies who trust us */}
            <Grid container columns={12} mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={12} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"center"}}  >
                    <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Companies Who Trust Us</Typography>
                </Grid>
            </Grid>
            
            <Grid container  spacing={6} columns={12} >
                <Grid item xs={12} sm={6} md={3}>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={CWTU1}>
                        </Avatar>
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={CWTU2}>
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={CWTU3}>
                        </Avatar>
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={CWTU4}>
                        </Avatar>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
        {/* justifyContent:{xs:"center", sm:"center", md:"center"}}} */}

        
        {/* Sixth grid: Shopping smart has its benefits */}
        <Box mt={10} sx={{border: "1px solid red", backgroundColor:"#ED8204", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap", justifyContent:{xs:"center", sm:"center", md:"center"}, alignItems:{xs:"center", sm:"center", md:"center"}}}>          
            <Box sx={{border: "1px solid red",textAlign: "center", height: {xs:"70%", md:"50%"}, width: {xs: "70%", md: "40%"}, display: "flex", justifyContent: {xs:"center", md:"end"}, alignItems: "center"}}>
                <img src={seventhgridimage} alt="" sx={{ height:{xs:"50%", sm:"50%", md:"80%"}}}/>
            </Box>
            <Box sx={{border: "1px solid red",textAlign: "center", height: {xs:"100%", md:"50%"}, width: {xs: "100%", md: "50%"}, display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{border: "1px solid red", textAlign:{xs:"center", sm:"center", md:"start"}, width:"67%", display:"block", flexDirection:"column" }}>
                    <Typography sx={{color:"white", fontWeight:"bold", fontSize:"2.5rem"}} variant="h5">Shopping Smart <br/> has its benefits. </Typography>
                    <br></br>
                    <Button variant="contained" size="small" sx={{textTransform:"none", width:"200px", height:"50px", borderRadius:"5px"}}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
        

        

         {/* Seventh Grid: People who shopped on Future Mart */}
         <Container maxWidth="lg" sx={{width:"80%"}}>
            <Box mt={10}>
                <Typography sx={{ width:"100%", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", fontWeight:"600"}}variant="h5">People Who Shopped On Future Mart</Typography>
            </Box>    
            {/* <Typography mt={9} sx={{textAlign:"center"}}>People Who Shopped On Future Mart</Typography> */}

            <Grid container spacing={10} columns={12} >
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM1}>
                    </Avatar>
                    </Box>
                    <Typography>Mercy Okon</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM2}>
                    </Avatar>
                    </Box>
                    <Typography>Bertila Sam</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM3}>
                    </Avatar>
                    </Box>
                    <Typography>Uduak Peter</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM4}>
                    </Avatar>
                    </Box>
                    <Typography>Clement Essien</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
                </Grid>
            </Grid>

            
               
        </Container>



                   


        </>
       
        );
}

export default Main;