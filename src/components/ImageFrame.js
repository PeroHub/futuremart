import Box from '@mui/material/Box';
import me from "../images/Tshirt.png"

function ImageFrame({width, height,  img}) {
    console.log(img)
    return ( 
        <Box sx={{ background: "#ED8204", width: width, height: height, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{ background: "#a55b02", width: "inherit", height: "inherit", borderRadius: "inherit", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={img} />
            </Box>
            
        </Box>
     );
}

export default ImageFrame;