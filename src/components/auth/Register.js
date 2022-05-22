import Box from '@mui/material/Box';
import { useAuth0 } from '@auth0/auth0-react';
function Register() {
    let { loginWithRedirect } = useAuth0()
    return ( 
        <Box onClick={() => loginWithRedirect}>Register</Box>
     );
}

export default Register;