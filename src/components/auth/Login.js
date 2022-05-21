import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonMain from '../ButtonMain';
import { useAuth0 } from '@auth0/auth0-react';
function Login() {

    const {  loginWithRedirect } = useAuth0()
    return ( 
            <Button variant="contained" sx={{pr:6, pl:6}} onClick={() => loginWithRedirect() }>Login</Button>
     );
}

export default Login;