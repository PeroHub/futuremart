import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';


import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom"
// import { BsFillHeartFill } from "react-icons/bs"

import logo from '../../images/Logo.svg'
import love from '../../images/Vector.png'
import chart from '../../images/Chart.png'
import profile from '../../images/profile.png'
import Toggle from './Toggle';
import Login from '../auth/Login';
import Logout from '../auth/Logout';




function AppBarContainer() {

  const {  isAuthenticated } = useAuth0()
  let navigate = useNavigate()
  function redirect() {
    navigate("/")
  }

//   const  handleLoginCheck = () =>  {
//     if(!isAuthenticated){
//         loginWithRedirect()
//     }else {
//         alert("all good")
//     }
// }
  
    return ( 
        <AppBar position="static" sx={{background: "#fff"}}>
      <Container maxWidth="xl" sx={{ width: {xs: "100%", sm: "80%", md: "80%"}, display: "flex", justifyContent: "space-between"}}>
        
          <IconButton sx={{display: "flex", justifyContent: "center", alignItems: "center", flexGrow: {xs: 1, sm:0, md: 0}}}>
            <img 
              alt="logo" 
              src={logo} 
              onClick={redirect}
              />
          </IconButton>
          
          <Box sx={{display: {xs: "none", sm: "none", md: "flex"}, justifyContent: "space-evenly", alignItems: "center", width: "30%", flexGrow: {xs: 1, sm:0, md: 0}}}>
              <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Products
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              About FutureMart
            </Typography>
          </Box>

          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         
          <Box sx={{width: "50%", display: "flex", gridTemplateColumns: "1fr 1fr",  justifyContent: "center", alignItems: "center" }}>
            
            <Box sx={{color: "black", display: "flex", justifyContent: "space-evenly", width: "100%"}}>
              {/* <BsFillHeartFill /> */}
              <Box sx={{display: {xs: "none", sm: "none", md: "block", width: {xs: "30%", sm: "60%"}}}}>
                {/* <Button variant="contained" sx={{pr:6, pl:6}}>Login</Button> */}
           
                {isAuthenticated ? <Logout /> : <Login />  }
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: {xs: "70%", sm: "50%", md: "20%"}}}>
                <img src={love} style={{width: "20px", height: "20px"}} alt="love"/>
                <img src={chart} style={{width: "20px", height: "20px"}} alt="chart" />
                <img src={profile} style={{width: "20px", height: "20px"}} alt="profile" />
              </Box>
            </Box>
          </Box>
         
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}><Toggle /></Box>
        
      </Container>
    </AppBar>
     );
}

export default AppBarContainer;