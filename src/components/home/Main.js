import { useState } from 'react';
import { Link } from "react-router-dom"
import { Container, Grid, Card, CardMedia, Button, Typography, Box } from '@mui/material';
import { CardActions, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
// import seventhgridimage from '../../images/seventhgridimage.png';

// People Who Shop On FutureMart Images
import PWSOFM1 from '../../images/PWSOFM1.png';
import PWSOFM2 from '../../images/PWSOFM2.png';
import PWSOFM3 from '../../images/PWSOFM3.png';
import PWSOFM4 from '../../images/PWSOFM4.png';


import { useNavigate } from 'react-router-dom';







// import Popup from '../../components/Popup';



// import { useAuth0 } from '@auth0/auth0-react';







function Main() {
    //Using array method (filter) to fiter our array in Json folder
    const[products] = useState(futureProducts);

    let navigate = useNavigate()
    let handleNavi = () => {
        navigate("/product")
    }

     const ourProduct = products.filter(product=>{
         return product.id < 4;
        })
     console.log(ourProduct)

     const featuredProduct = products.filter(product=>{
        return product.id > 3 ;
       })


       
       
      
      

     

    //DialogBox Function
   
    
   

    //Popup function
    //    const [openPopup, setOpenPopup] = useState(false)
    //    const handleClickOpen = () => {
    //     setOpenPopup(true);
    //   };

    //DialogBox Function
    // const [dialogData, setDiaogData] = useState([])
    
   

    // const {  isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

   

        return ( 
        <>
            {/* First Grid Our products */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"80%", md:"80%"}, mt: 8, overflowX: "hidden" }}>
                <Box >
                    <Typography sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Our Products</Typography>

                </Box>
                        
                
                <Grid container spacing={6} columns={12} mt={1} sx={{  display:"flex", flexDirection:"row", justifyContent:"center"}} >
                
                    {ourProduct.map((product) =>(

                       

                    <Grid item xs={12} sm={12} md={4} key={product.id}>
                
                        <Card xs={12} sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                            <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >{product.price}</Button>
                            <CardMedia  sx={{  display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                                <Box sx={{ display:"flex", width:"100%", height:"40vh", alignItems:"center", justifyContent:"space-around"}}>
                                    <ImageFrame  width={"200px"} height={"200px"}  image={product.image}/>
                                    {/* <ImageFrame  width={"90px"} height={"90px"}  image={product.image}/> */}
                                </Box>
                                
                            </CardMedia>
                        </Card>
                        <Card sx={{height:"17vh"}}>
                        <Typography mt={2} sx={{textAlign:"center", fontFamily:"Quando", color:"#333333", fontSize:"1rem", lineHeight:{md:"1.5rem"}, fontWeight:"bold"}}>{product.cetegory}</Typography>
                        <CardActions sx={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"end"}}>
                        <Button
                            variant="outlined" 
                            size="small"  
                            sx={{width:"46%",
                            borderRadius:"3px",
                            textTransform:"none", 
                            fontSize:"75%",
                            mt:{md:3.5} }}
                            startIcon={<FavoriteIcon sx={{color:"#B0B0B0"}}/>}>Save                             
                        </Button>
                            


                        
                        <Button 
                            variant="outlined" 
                            size="small"  
                            sx={{width:"46%",
                            borderRadius:"3px",
                            textTransform:"none", 
                            fontSize:"75%",
                            mt:{md:3.5} }} 
                            onClick={handleNavi}
                            startIcon={<ShoppingCartIcon sx={{color:"#B0B0B0"}}/>}> Add to Cart 
                        </Button>
                        </CardActions>
                        </Card>
                
                                                
                    </Grid>
                    ))} 
            </Grid>

            <Link to="/product">
                <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <ButtonMain variant={"outlined"} width={"200px"} height={"50px"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} fontSize={"18px"}   /> 
                </Box>
            </Link>
           


            
            {/* <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <ButtonMain variant={"outlined"} width={"200px"} height={"50px"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} fontSize={"18px"}   /> 
            </Box> */}



            
            
            
            {/* Second Grid: How to shop on Future Mart */}
            <Box mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
                <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">How To Shop On Future Mart</Typography>
            </Box>    
            
            <Grid container  spacing={10} columns={12} sx={{ mt:{xs:5, sm:0, md:0} }} >
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center" }}>
                    <Typography sx={{fontWeight:"bold", color:"#333333"}}>Sign Up</Typography>
                    <br></br>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={signup}>
                        </Avatar> 
                    </Box>
                    <br></br>
                    <Typography>Signup here to kickstart your wonderful shopping experience with us. </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography sx={{fontWeight:"bold", color:"#333333"}}>Shop</Typography>
                    <br></br>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={shop}>
                        </Avatar>
                    </Box>
                    <br></br>

                    <Typography>We offer a secured environment with 24 hour customer service  to make your shopping experience easier while ensuring rapid response to your shopping needs.</Typography>

                    <Typography>We offer a secured environment with 24 hours customer service  to make your shopping experience easier while ensuring rapid response to your shopping needs.</Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography sx={{fontWeight:"bold", color:"#333333"}}>Check Out</Typography>
                    <br></br>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={checkout}>
                        </Avatar>
                    </Box>
                    <br></br>
                    <Typography>We offer the best discounts with a wide varienty of goods to choose from. </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex", flexDirection:"column", textAlign:"center"}} >
                    <Typography sx={{fontWeight:"bold", color:"#333333"}}>Wait for Delivery </Typography>
                    <br></br>
                    <Box width="fullWidth" sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                        <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            alt="" 
                            src={waitfordelivery}>
                        </Avatar>
                    </Box>
                    <br></br>

                    <Typography>We quarantee delivery within 48 hour from time of placing order. </Typography>

                    <Typography>We quarantee delivery within 48 hours after time of placing order. </Typography>

                </Grid>
                
            </Grid>
        </Container>


        
        {/* backgroundColor:"#ED8204" */}
        {/*Third grid: You will look fabulous */}
        <Box mt={10} sx={{backgroundColor:"#ED8204", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap", justifyContent:{xs:"center", sm:"center", md:"center"}, alignItems:{xs:"center", sm:"center", md:"center"}}}>          
            <Box sx={{ width: {xs: "100%", md: "40%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={fourthgridpicture} alt="" sx={{width:"50px"}}/>
            </Box>
            <Box sx={{textAlign: "center",  width: {xs: "100%", md: "50%"}, display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{textAlign:{xs:"center", sm:"center", md:"start"}, width:{sx:"90%", sm:"90%", md:"70%"}, display:"block", flexDirection:"column" }}>
                    <Typography sx={{color:"white", fontWeight:"bold", fontSize:{ xs:"2rem", sm:"2rem", md:"2.5rem"} }} variant="h5">You’ll look good and <br/>fabulous on our swags.  </Typography>
                    <br></br>
                    <Button variant="contained" size="small" sx={{textTransform:"none", width:"200px", height:"50px", borderRadius:"5px"}}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
        
              
               
               
          
        {/* Fourth grid:Featured products */}
        <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"80%", md:"80%"}}}>
            <Typography mt={15} sx={{ maxWwidth:"50px", textAlign:"left", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Featured Products</Typography>
            
                        
                
            <Grid container spacing={6} columns={12} mt={1} sx={{  display:"flex", flexDirection:"row", justifyContent:"center"}} >
                
            {featuredProduct.map((product) =>(
                    <Grid item xs={12} sm={12} md={4} key={product.id}>
                
                        <Card xs={12} sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                            <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >{product.price}</Button>
                            <CardMedia  sx={{  display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                                <Box sx={{ display:"flex", width:"100%", height:"40vh", alignItems:"center", justifyContent:"space-around"}}>
                                    <ImageFrame width={"200px"} height={"200px"}  image={product.image}/>
                                    {/* <ImageFrame  width={"90px"} height={"90px"}  image={product.image} */}
                                </Box>
                                
                            </CardMedia>
                        </Card>
                        <Card sx={{height:"17vh"}}>
                        <Typography mt={2} sx={{textAlign:"center", fontFamily:"Quando", color:"#333333", fontSize:"1rem", lineHeight:{md:"1.5rem"}, fontWeight:"bold"}}>{product.cetegory}</Typography>
                        <CardActions sx={{ width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"end"}}>
                            <Button
                                variant="outlined" 
                                size="small"  
                                sx={{width:"46%",
                                borderRadius:"3px",
                                textTransform:"none", 
                                fontSize:"75%",
                                mt:{md:3.5} }}
                                startIcon={<FavoriteIcon sx={{color:"#B0B0B0"}}/>}>Save                             
                            </Button>
                                


                            
                            <Button 
                                variant="outlined" 
                                size="small"  
                                sx={{width:"46%",
                                borderRadius:"3px",
                                textTransform:"none", 
                                fontSize:"75%",
                                mt:{md:3.5} }} 
                                onClick={handleNavi}
                                startIcon={<ShoppingCartIcon sx={{color:"#B0B0B0"}}/>}> Add to Cart 
                            </Button>
                            
                            
                        </CardActions>
                        </Card>
                
                                                
                    </Grid>
                    ))} 
            </Grid>

            <Link to="/product">
                <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                    <ButtonMain variant={"outlined"} width={"200px"} height={"50px"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} fontSize={"18px"} /> 
                </Box>
            </Link>
            

            {/* <Box width="fullWidth" mt={6} sx={{height:"65px", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}}>
                <ButtonMain variant={"outlined"} width={"200px"} height={"50px"} bg={"red"} text={"View More"} border={"1px solid #414744"} color={"#414744"} fontSize={"18px"} /> 
            </Box> */}

            {/* Fifth grid: Companies who trust us */}
            <Grid container columns={12} mt={15} sx={{display:"flex", flexDirection:"row", textAlign:"left", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={12} sx={{maxwidth:"50px", display:"flex", flexDirection:"row", justifyContent:"center"}}  >
                    <Typography sx={{ width:"433px", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", lineHeight:"47.2px", fontWeight:"600"}}variant="h5">Companies Who Trust Us</Typography>
                </Grid>
            </Grid>
            
            <Grid container  spacing={6} columns={12} sx={{ mt:{xs:5, sm:0, md:0}}} >
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
        <Box mt={10} sx={{ backgroundColor:"#ED8204", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap", justifyContent:{xs:"center", sm:"center", md:"center"}, alignItems:{xs:"center", sm:"center", md:"center"}}}>          
            <Box sx={{ width: {xs: "100%", md: "40%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={fourthgridpicture} alt="" sx={{width:"50px"}}/>
            </Box>
            <Box sx={{ textAlign: "center",  width: {xs: "100%", md: "50%"}, display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Box sx={{ textAlign:{xs:"center", sm:"center", md:"start"}, width:{sx:"90%", sm:"90%", md:"70%"}, display:"block", flexDirection:"column" }}>
                <Typography sx={{color:"white", fontWeight:"bold", fontSize:{ xs:"2rem", sm:"rem", md:"2.5rem"} }} variant="h5">Shopping Smart <br/> has its benefits. </Typography>
                    <br></br>
                    <Button variant="contained" size="small" sx={{textTransform:"none", width:"200px", height:"50px", borderRadius:"5px"}}>Shop Now</Button>
                </Box>
            </Box>
        </Box>

        {/* <Box mt={10} sx={{border: "1px solid red", backgroundColor:"#ED8204", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap", justifyContent:{xs:"center", sm:"center", md:"center"}, alignItems:{xs:"center", sm:"center", md:"center"}}}>          
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
        </Box> */}
        

        

         {/* Seventh Grid: People who shopped on Future Mart */}
         <Container maxWidth="lg" sx={{width:"80%"}}>
            <Box mt={10}>
                <Typography sx={{ width:"100%", height:"48px", textAlign:"center", color:"#333333", fontFamily:"Inter", fontSize:"30px", fontWeight:"600"}}variant="h5">People Who Shopped On Future Mart</Typography>
            </Box>    
            
            <Grid container spacing={10} mt={0} columns={12} sx={{ mt:{xs:5, sm:0, md:0} }} >
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM1}>
                    </Avatar>
                    </Box>
                    <br></br>
                    <Typography>Mercy Okon</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <br></br>
                    <Typography>I have been using FutureMart for like a year now and there has never been a time I experienced a case of: " what I ordered vs what  I got". Quality is always assured.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM2}>
                    </Avatar>
                    </Box>
                    <br></br>
                    <Typography>Bertila Sam</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <br></br>
                    <Typography>My goods got delivered within 24 hour and that was really amazing!; because, I have been using e-commerce sites for years now and never have I experienced such.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM3}>
                    </Avatar>
                    </Box>
                    <br></br>
                    <Typography>Uduak Peter</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <br></br>
                    <Typography> I remember over paying for a product, but thanks to the swift customer service intervention. I got my money refunded.</Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3} sx={{display:"block", justifyContent:"center", textAlign:"center"}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Avatar 
                            sx={{width:"65px", height:"65px"}}
                            src={PWSOFM4}>
                    </Avatar>
                    </Box>
                    <br></br>
                    <Typography>Clement Essien</Typography>
                    <Typography sx={{color:"#ED8204"}}>Web Developer</Typography>
                    <br></br>
                    <Typography> I have always been skeptical about e-commerce sites and their services but future mart came and change my perception.</Typography>
                </Grid>
            </Grid>

            
               
        </Container>

        
        
        {/* <Popup openPopup={openPopup} dialogData={dialogData} setOpenPopup={setOpenPopup} handleClose={handleClose}></Popup> */}

       
        
        {/* <Popup openPopup={openPopup} dialogData={dialogData} setOpenPopup={setOpenPopup}></Popup> */}



                   


        </>
       
        );
}

export default Main;