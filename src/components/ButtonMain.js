import Button from '@mui/material/Button';

function ButtonMain({height, width, variant, fontWeight, fontSize, textAlign, lineHeight, borderRadius}) {
    return ( 
        <Button variant='contained' sx={{p:2, fontWeight: "550px", fontSize: "18px", textAlign: "center", lineHeight: "24px", borderRadius: "5px"}}></Button>
     );
}

export default ButtonMain;