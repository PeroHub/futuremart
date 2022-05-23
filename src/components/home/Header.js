import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ButtonMain from "../ButtonMain"
import ImageFrame from '../ImageFrame';
// import me from "../../images/Tshirt.png"
import "./header.css"
// import Login from '../auth/Login';
// import Logout from '../auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import AppBarContainer from './AppBarContainer';
import TextField from '@mui/material/TextField';
import { futureProducts } from '../../products';

function Header() {
    const {  isAuthenticated, user } = useAuth0()
    console.log(isAuthenticated)
    console.log(JSON.stringify(user))

    const products = futureProducts()
    const landingImg = products[0].image

    // const  handleLoginCheck = () =>  {
    //     if(!isAuthenticated){
    //         loginWithRedirect()
    //     }else {
    //         alert("all good")
    //     }
    // }
    // if(isLoading){
    //     return <div>Loading...</div>
    // }
    return ( 
       
        <Box sx={{background: "#FBFBFB"}}>
            <AppBarContainer />
            <Box sx={{ minHeight: "50vh", display: "flex",  justifyContent: "center", alignItems: "center"}}>
                <Box sx={{width: {xs: "100%", md: "80%"}, display: {sm : "block", md: "grid"}, height: "inherit", gridTemplateColumns: "1fr 1fr", margin: "0 auto" }}>
                    <Box sx={{display: "flex", p:2, flexDirection: "column", color: "#474747", justifyContent: "center"}}>
                        <Typography sx={{ fontSize: {xs: "2rem", md: "3rem"},  fontWeight: "900"}}>Welcome! <br /> Wetin you for like Buy?</Typography>
                        <Box sx={{display: "flex"}}>
                            <TextField 
                                fullWidth  
                                id="fullWidth" 
                                sx={{
                                    boxShadow: "0px 0px 12px rgba(13, 8, 255, 0.1)", 
                                    borderRadius: "6px", 
                                    color:"primary"
                                    }} />
                            <Button variant='contained' sx={{pr: 2, pl: 2}}>Search</Button>
                        </Box>
                    </Box>
                    <Box sx={{display: {xs: "none", md: "flex"}, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                       <ImageFrame width={"300px"} height={"300px"} image={landingImg}  />
                    </Box>
                </Box>
               
            </Box>
            
            
          
            
            
        {/* <ImageFrame width="100px" height="100px" img={me} /> */}
        </Box>
     );
}

export default Header;