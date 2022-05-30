import Box from '@mui/material/Box'


function ImageFrame({width, height, image}) {
    
     return(
          <Box sx={{ height:height, width:width,  background: "#0D08FF",  borderRadius: "50%", display: "flex", justifyContent:"center", alignItems: "center", p:4}}>
               
                    <Box sx={{width: "inherit", height: "inherit", borderRadius: "inherit", display: "flex", justifyContent:"center", alignItems: "center"}}>
                         <img src={image} style={{width: "120px", height: "120px"}} alt="cloth"/>
               
                    </Box>
          </Box>
          
     );
}
export default ImageFrame;


// <Box sx={{ background: "#0D08FF", width: width, height: height, borderRadius: "50%", p: 1.3}}>
        //     <Box sx={{ background: "#a55b02", width: "inherit", height: "inherit", borderRadius: "inherit", display: "flex", justifyContent: "center", alignItems: "center"}}>
        //     <img src={img} />
        //     </Box>
            
        // </Box>