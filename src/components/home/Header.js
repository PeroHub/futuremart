import Box from '@mui/material/Box';
import ButtonMain from "../ButtonMain"
import ImageFrame from '../ImageFrame';
import me from "../../images/Tshirt.png"
function Header() {
    return ( 
        <Box sx={{border: "1px solid red"}}>
            Header
        <ButtonMain signup={"Register"} />
        {/* <ImageFrame width="100px" height="100px" img={me} /> */}
        </Box>
     );
}

export default Header;