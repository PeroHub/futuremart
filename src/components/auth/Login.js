import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
function Login() {

    const {  loginWithRedirect } = useAuth0()
    return ( 
            <Button onClick={() => loginWithRedirect() }>Login</Button>
     );
}

export default Login;