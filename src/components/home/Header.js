import Box from '@mui/material/Box';
import ButtonMain from "../ButtonMain"

function Header() {
    return ( 
        <Box sx={{border: "1px solid red"}}>
            Header
        <ButtonMain signup={"Register"} />
        </Box>
     );
}

export default Header;