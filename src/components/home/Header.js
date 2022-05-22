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
import AppBarContainer from './AppBarContainer';
import TextField from '@mui/material/TextField';


function Header() {
    const {  isAuthenticated, user } = useAuth0()
    console.log(isAuthenticated)
    console.log(JSON.stringify(user))

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
        <Box sx={{border: "1px solid red"}}>
            <AppBarContainer />
            <Box sx={{border: "1px solid red", height: "50vh"}}>
                <Box sx={{width: {xs: "100%", md: "80%"}, display: {sm : "block", md: "grid"}, height: "inherit", gridTemplateColumns: "1fr 1fr", margin: "0 auto" }}>
                    <Box sx={{display: "flex", flexDirection: "column", color: "#474747", justifyContent: "center"}}>
                        <Typography sx={{ fontSize: "3rem",  fontWeight: "900"}}>Welcome! <br /> Wetin you for like Buy?</Typography>
                        <Box sx={{display: "flex"}}>
                            <TextField fullWidth label="fullWidth" id="fullWidth" />
                            <Button variant='contained' sx={{pr: 2, pl: 2}}>Search</Button>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                       
                    </Box>
                </Box>
               
            </Box>
            
            
          
            
            
        {/* <ImageFrame width="100px" height="100px" img={me} /> */}
        </Box>
     );
}

export default Header;