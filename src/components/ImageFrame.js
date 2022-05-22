import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'
import me from "../images/Tshirt.png"

function ImageFrame({width, height, border, image, padding}) {
    
     return(
          <Avatar  sx={{ height:{height}, width:{width}, border:{border}, padding:{padding}}}>
               <img src={image}/>
          </Avatar>
     );
}
export default ImageFrame;


// <Box sx={{ background: "#0D08FF", width: width, height: height, borderRadius: "50%", p: 1.3}}>
        //     <Box sx={{ background: "#a55b02", width: "inherit", height: "inherit", borderRadius: "inherit", display: "flex", justifyContent: "center", alignItems: "center"}}>
        //     <img src={img} />
        //     </Box>
            
        // </Box>