import React, { useState} from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageFrame from '../ImageFrame';
// import AppBarContainer from '../home/AppBarContainer';
import Header from '../home/Header';
import fourthgridpicture from '../../images/fourthgridpicture.png';
import { futureProducts } from "../../products"
import Footer from '../home/Footer';
import Popup from '../Popup';



function Product() {
    let item = futureProducts()
    const bangle = item[4]
    // console.log(bangle.image)

    const [dialogData, setDiaogData] = useState([])

   

    const [openPopup, setOpenPopup] = useState(false)
    const handleOpen = () => {
        setOpenPopup(true)
       
    }
    const handleClose = () => {
     setOpenPopup(false);
   };


   let searchItem = JSON.parse(localStorage.getItem('search'))

   console.log(searchItem)
  
// const  search = (value) => {
//     item.map((element) => {
//         if(element.cetegory !== value){
            
//             classObj = "block"
//         }else {
//             console.log("false")
            
//         }
//     })

// }

// search('Biro')
      



   
  

    return ( 
        <>
        <Box>
            <Header bangle={bangle.image} text={"We get afforable swags wey you go like"} />
            <Box sx={{width: {xs: "100%", sm: "80%",md: "80%"}, margin: "0 auto"}}>
            <Grid container spacing={6} columns={12} mt={1} sx={{  display:"flex", flexDirection:"row", justifyContent:"center"}} >
                
                {item.map((product) =>(
                <Grid item xs={12} sm={12} md={4} key={product.id} >
            
                    <Box >
                    <Card xs={12} sx={{height:"45vh", textAlign:"end", backgroundColor:"#FAFAFA"}}>
                        <Button  variant="contained" size="small" sx={{backgroundColor:"#ED8204", borderRadius:"none"}} >N{product.price}</Button>
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
                    {/* <FavoriteBorderIcon sx={{width:"19%", height:"19px"}}/> */}
                        

                        
                        <Button 
                            variant="outlined" 
                            size="small"  
                            sx={{width:"46%",
                            margin: "0 auto",
                            borderRadius:"3px",
                            textTransform:"none", 
                            fontSize:"75%",
                            mt:{md:3.5} }} 
                            startIcon={<ShoppingCartIcon sx={{color:"#B0B0B0"}}/>} 
                            onClick={() => {
                                handleOpen()
                                setDiaogData(product)
                            }}                                 > 
                            Add to Cart </Button>

                       
                        
                    </CardActions>
                    </Card>
            
                    </Box>
                                            
                </Grid>
                ))} 
        </Grid>

            </Box>

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

            <Footer />
        </Box>

        <Popup openPopup={openPopup} dialogData={dialogData} setOpenPopup={setOpenPopup} handleClose={handleClose}></Popup>
        </>
     );
}

export default Product;