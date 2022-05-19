import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonMain from "../ButtonMain"
import ImageFrame from '../ImageFrame';
import me from "../../images/Tshirt.png"
import "./header.css"
import Login from '../auth/Login';
import Logout from '../auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';
function Header() {
    const {  isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0()
    console.log(isAuthenticated)
    console.log(JSON.stringify(user))

    const  handleLoginCheck = () =>  {
        if(!isAuthenticated){
            loginWithRedirect()
        }else {
            alert("all good")
        }
    }
    if(isLoading){
        return <div>Loading...</div>
    }
    return ( 
        <Box sx={{border: "1px solid red"}}>
            Header
            {isAuthenticated ? <Logout /> : <Login />  }
            
            
            <div onClick={handleLoginCheck}>me</div>
            <Box sx={{border: "1px solid red", p:2, display: {xs: "block", sm: "flex", md: "flex"}, flexWrap: "wrap"}}>
                <Box sx={{border: "1px solid red", textAlign: "center", m:2, height: "20vh", width: {xs: "100%", md: "40%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>First</Box>
                <Box color="primary" sx={{border: "1px solid red",textAlign: "center",  m:2, height: "20vh",width: {xs: "100%", md: "40%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>Second</Box>
                <Box sx={{border: "1px solid red",textAlign: "center", height: "20vh",width: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>Third</Box>
                <Box sx={{border: "1px solid red",textAlign: "center", height: "20vh",width: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>Third</Box>
                <Button color="secondary" variant='contained'>me</Button>
            </Box>
            
            <Box sx={{mt: 2, border: "1px solid red", display: {xs: "block", sm: "grid", md: "grid"}, gridTemplateColumns: "1fr 1fr 1fr"}}>
                <Box sx={{border: "1px solid red"}}>Grid</Box>
                <Box sx={{border: "1px solid red"}}>Grid</Box>
                <Box sx={{border: "1px solid red"}}>Grid</Box>
            </Box>

            <Box className='container'>
                <Box className='item'>CSS</Box>
                <Box className='item'>CSS</Box>
                <Box className='item'>CSS</Box>
            </Box>
            
            
        {/* <ImageFrame width="100px" height="100px" img={me} /> */}
        </Box>
     );
}

export default Header;