import { useState } from 'react';
import { Container, Grid, Card, CardMedia, Button, Typography, Box, Stack, } from '@mui/material';
import { CardActions, Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageFrame from '../ImageFrame';
import {futureProducts} from '../../products';
import ButtonMain from '../ButtonMain';

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
        <Container maxWidth="lg"  >
            
            
            <Grid container columns={12} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"start"}}>
            {/* <Box sx={{ width: 300 }}> // Numbers are converted to pixel values. */}
                <Grid item xs={8} sm={8} md={6} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"start"}}  >
                    <Typography sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Our Products</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6} columns={12} mt={1} sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}} >
               
                {products.map((product) =>(
                <Grid item xs={8} sm={8} md={4} key={product.id}>
              
                    <Card sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                        <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >{product.price}</Button>
                        <CardMedia pt={25} sx={{ height:"40vh", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                            <ImageFrame width="123px" height="130px">{product.image}</ImageFrame>
                            <ImageFrame width="58px" height="58px"  />
                        </CardMedia>
                    </Card>
                    <Card sx={{height:"20vh"}}>
                    <Typography mt={2} sx={{textAlign:"center"}}>{product.cetegory}</Typography>
                    <CardActions sx={{justifyContent:"space-between", border:"1px solidblack"}}>
                        <Button variant="outlined" size="medium">
                            <FavoriteBorderIcon/>
                            <Typography>Save</Typography>
                        </Button>
                        <Button variant="outlined" size="medium">
                            <ShoppingCartIcon />
                            <Typography>Add to Cart</Typography>
                        </Button>
                        
                    </CardActions>
                    </Card>
              
                                            
                </Grid>
                ))} 
        </Grid>
        <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
            <ButtonMain  variant="outlined" sx={{color:"white"}} />
            {/* <Button  variant="outlined" size="medium" sx={{textTransform:"none", width:"150px"}}>
                View More
            </Button> */}
        </Box>

        {/* Second Grid */}
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
                         alt="Remy Sharp" 
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
                        alt="Remy Sharp" 
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
                        alt="Remy Sharp" 
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
                        alt="Remy Sharp" 
                        src={waitfordelivery}>
                    </Avatar>
                </Box>
                <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
            </Grid>
            
        </Grid>


        {/* Third Grid */}
        {/* <Typography mt={9} sx={{textAlign:"center"}}>Using Convenient Methods</Typography>
        <Grid container  spacing={10} columns={12} style={{justifyContent:"center"}} >
            <Grid item xs={12} sm={12} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar sx={{width:"65px", height:"65px"}}>R</Avatar>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={12} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar sx={{width:"65px", height:"65px"}}>R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar sx={{width:"65px", height:"65px"}}>R</Avatar>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={12} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar sx={{width:"65px", height:"65px"}}>R</Avatar>
                </Box>
            </Grid>
            
        </Grid> */}
        {/* backgroundColor:"#ED8204" */}
        {/* fourth grid */}
        
        <Grid container spacing={3} mt={9}  columns={12} sx={{ height:"80%", width:"87.8vw", backgroundColor:"#ED8204", display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
            
                <Grid item xs={12} sm={6} md={6} sx={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    
                        <img src={fourthgridpicture} style={{height:"90%", width:"80%"}}/>

                    
                    
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"column",  alignItems:"start", justifyContent:"center"}} >
                    <Typography sx={{color:"white", fontWeight:"bold", fontSize:"2.5rem"}} variant="h5">You’ll look good and <br/>fabolus on our swags.  </Typography>
                        
                    
                <Button variant="contained" size="small" sx={{textTransform:"none"}}>Shop Now</Button>
                </Grid>
            
        </Grid>
      
        

        
               
               
          
        {/* fifth grid */}
        <Typography mt={15} sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Featured Products</Typography>
          
        <Grid container spacing={6} columns={12} mt={1} sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}} >
               
               {products.map((product) =>(
               <Grid item xs={8} sm={8} md={4} key={product.id}>
             
                   <Card sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                       <Button  variant="contained" size="small" >{product.price}</Button>
                       <CardMedia pt={25} sx={{ height:"40vh", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                           <ImageFrame width="123px" height="130px">{product.image}</ImageFrame>
                           <ImageFrame width="58px" height="58px"  />
                       </CardMedia>
                   </Card>
                   <Card sx={{height:"20vh"}}>
                   <Typography mt={2} sx={{textAlign:"center"}}>{product.cetegory}</Typography>
                   <CardActions sx={{justifyContent:"space-between", border:"1px solidblack"}}>
                       <Button variant="outlined" size="medium">
                           <FavoriteBorderIcon/>
                           <Typography>Save</Typography>
                       </Button>
                       <Button variant="outlined" size="medium">
                           <ShoppingCartIcon />
                           <Typography>Add to Cart</Typography>
                       </Button>
                       
                   </CardActions>
                   </Card>
             
                                           
               </Grid>
               ))} 
       </Grid>
        <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
            <Button  variant="outlined" size="medium">
                View More
            </Button>
        </Box>


        {/* sixth grid */}
        <Grid container columns={12} mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
            <Grid item xs={12} sm={12} md={12} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"center"}}  >
                <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Companies Who Trust Us</Typography>
            </Grid>
        </Grid>
        
        <Grid container  spacing={6} columns={12} >
            <Grid item xs={12} sm={4} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={CWTU1}>
                    </Avatar>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={4} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={CWTU2}>
                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={CWTU3}>
                    </Avatar>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={4} md={3}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={CWTU4}>
                    </Avatar>
                </Box>
            </Grid>
            
        </Grid>


        
        {/* seventh grid */}
        <Grid container spacing={3} mt={9}  columns={12} sx={{ height:"80%", width:"87.8vw", backgroundColor:"#ED8204", display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
            
            <Grid item xs={12} sm={6} md={6} sx={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                
                    <img src={seventhgridimage} style={{height:"90%", width:"80%"}}/>

                
                
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"column",  alignItems:"start", justifyContent:"center"}} >
                <Typography sx={{color:"white", fontWeight:"bold", fontSize:"2.5rem"}} variant="h5">Shopping Smart <br/> has its benefits. </Typography>
                    
                
            <Button variant="contained" size="small" sx={{textTransform:"none"}}>Shop Now</Button>
            </Grid>
        
    </Grid>

        

         {/* eighth Grid */}
         <Grid container columns={12} mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
            <Grid item xs={12} sm={12} md={12} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"center"}}  >
                <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", fontWeight:"600"}}variant="h5">People Who Shopped On Future Mart</Typography>
            </Grid>
        </Grid>
         {/* <Typography mt={9} sx={{textAlign:"center"}}>People Who Shopped On Future Mart</Typography> */}

        <Grid container  spacing={10} columns={12} >
            <Grid item xs={12} sm={12} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={PWSOFM1}>
                    </Avatar>
                </Box>
                <Typography>Mercy Okon</Typography>
                <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={PWSOFM2}>
                    </Avatar>
                </Box>
                <Typography>Bertila Sam</Typography>
                <Typography sx={{color:"#ED8204"}}>UI/UX Designer</Typography>
                <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={PWSOFM3}>
                    </Avatar>
                </Box>
                <Typography>Uduak Peter</Typography>
                <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <Avatar 
                        sx={{width:"65px", height:"65px"}}
                        src={PWSOFM4}>
                    </Avatar>
                </Box>
                <Typography>Clement Essien </Typography>
                <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                <Typography>Lorem ipsum dolor sit aur <br/> adipiscing elit, sed do eid <br/> incididunt ut labore</Typography>
            </Grid>
            
        </Grid>



                   


        </Container>
       
        );
}

export default Main;