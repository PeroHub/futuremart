
import Button from "@mui/material/Button";
import { useAuth0 } from '@auth0/auth0-react'
function Logout() {
    const { logout } = useAuth0()
    return ( 
        <>
            <Button variant="contained" sx={{pr:6, pl:6}} onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
        </>
        
     );
}

export default Logout;