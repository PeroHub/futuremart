import React, { useState } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ButtonMain from "../ButtonMain"
// import ImageFrame from '../ImageFrame';
// import me from "../../images/Tshirt.png"
import "./header.css"
// import Login from '../auth/Login';
// import Logout from '../auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom'
import AppBarContainer from './AppBarContainer';
import TextField from '@mui/material/TextField';
import { futureProducts } from '../../products';


function Header({bangle}) {
    
    const {  isAuthenticated, user } = useAuth0()
    console.log(isAuthenticated)
    console.log(JSON.stringify(user))

    const products = futureProducts()
    const landingImg = products[0].image

    const [ search, setSearch ] =  useState(null)
    console.log(search)
    const handleSearch = (e) => {
        setSearch(e.target.value)
        localStorage.setItem('search', JSON.stringify(e.target.value))
    }


//Redirecting
    let navigate = useNavigate()
    function redirect() {
        navigate("/product")
    }

    console.log(navigate)

    //Getting Route
    const  location = useLocation()

    let rightImg
    let textValue
    if(location.pathname === "/"){
        rightImg = landingImg
        textValue = <Typography sx={{ fontSize: {xs: "2rem", md: "2.8rem"},  fontWeight: "900"}}>Welcome! <br /> Wetin you for like Buy?</Typography>
    }else if(location.pathname === "/product"){
        rightImg = bangle
        textValue = <Typography sx={{ fontSize: {xs: "2rem", md: "2.8rem"},  fontWeight: "900"}}>We get affordable! <br /> swags wey you go like.</Typography>
    }

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
                    <Box sx={{display: "flex", p:2, flexDirection: "column", color: "#474747", justifyContent: "space-between"}}>
                        {textValue}
                        <Box sx={{display: "flex"}}>
                            <TextField 
                                fullWidth  
                                id="fullWidth"
                                onChange={handleSearch} 
                                sx={{
                                    boxShadow: "0px 0px 12px rgba(13, 8, 255, 0.1)", 
                                    borderRadius: "6px", 
                                    color:"primary"
                                    }} />
                            <Button variant='contained' sx={{pr: 2, pl: 2}} onClick={redirect}>Search</Button>
                        </Box>
                    </Box>
                    <Box sx={{display: {xs: "none", md: "flex"}, justifyContent: "end", alignItems: "center"}}>
                       {/* <ImageFrame width={"200px"} height={"200px"}  image={rightImg}  /> */}
                       <Box sx={{width: "300px", height: "300px", borderRadius: "50%", background: "blue", p: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                           <img src={rightImg} style={{width: "inherit"}} alt="header" />

                       </Box>
                    </Box>
                </Box>
               
            </Box>
            
            
          
            
            
        {/* <ImageFrame width="100px" height="100px" img={me} /> */}
        </Box>
     );
}

export default Header;