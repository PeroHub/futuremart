import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';



import { useNavigate, Link } from "react-router-dom"

// import { BsFillHeartFill } from "react-icons/bs"

import logo from '../../images/Logo.svg'

import chart from '../../images/Chart.png'
import profile from '../../images/profile.png'
import Toggle from './Toggle';





function AppBarContainer() {

 
  let navigate = useNavigate()
  function redirect() {
    navigate("/")
  }



  let cart = [JSON.parse(localStorage.getItem('userWant'))]
  console.log(cart["0"])

  let numz
  if(cart["0"] === null){
     console.log("null")
     numz = 0
  }else {
    console.log("Not null")
    numz = cart.length
  }
  
    return ( 
        <AppBar position="static" sx={{background: "#FBFBFB", boxShadow: "none"}}>
      <Container maxWidth="xl" sx={{ width: {xs: "100%", sm: "80%", md: "80%"}, display: "flex", justifyContent: "space-between"}}>
        
          <IconButton sx={{display: "flex", justifyContent: "center", alignItems: "center", flexGrow: {xs: 1, sm:0, md: 0}}}>
            <img 
              alt="logo" 
              src={logo} 
              onClick={redirect}
              />
          </IconButton>
          
          <Box sx={{display: {xs: "none", sm: "none", md: "flex"}, justifyContent: "space-evenly", alignItems: "center", width: "30%", flexGrow: {xs: 1, sm:0, md: 0}}}>
              <Link to="/product">
                  <Button
                  noWrap
                  component="a"
                  
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Products
                </Button>
              </Link>
              
              <Link to="/about">
                  <Button
                  noWrap
                  component="a"
                  
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  About FutureMart
                </Button>
              </Link>
          </Box>

          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         
          <Box sx={{width: "50%", display: "flex", gridTemplateColumns: "1fr 1fr",  justifyContent: "center", alignItems: "center" }}>
            
            <Box sx={{color: "black", display: "flex", justifyContent: "space-between", width: "100%"}}>
              {/* <BsFillHeartFill /> */}
              <Box sx={{display: {xs: "none", sm: "none", md: "block", width: {xs: "30%", sm: "60%"}}}}>
                {/* <Button variant="contained" sx={{pr:6, pl:6}}>Login</Button> */}
           
                {/* {isAuthenticated ? <Logout /> : <Login />  } */}
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-between",  alignItems: "center", position: "relative", left: "45px", width: {xs: "50%", sm: "50%", md: "20%"}}}>
                {/* <img src={love} style={{width: "20px", height: "20px"}} alt="love"/> */}
                <img src={chart} style={{width: "30px", height: "30px"}} alt="chart" />
                <span style={{border: "1px solid red", borderRadius: "50%", height: "15px", width: "15px", backgroundColor: "red", color: "#fff", padding: "5px", fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", right: "25px", top: "-8px"}}>{numz}</span>
                <img src={profile} style={{width: "30px", height: "30px"}} alt="profile" />

              </Box>
            </Box>
          </Box>
         
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}><Toggle /></Box>
        
      </Container>
    </AppBar>
     );
}

export default AppBarContainer;
