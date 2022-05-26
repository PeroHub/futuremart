import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
function Payment() {
    return ( 
        <Box sx={{background:'#ED8204', textAlign: "center", p:2, color: "#fff"}}>
            <Typography>Total Price</Typography>
            <Typography sx={{fontSize: "2rem"}}>Payment</Typography>
        </Box>
     );
}

export default Payment;