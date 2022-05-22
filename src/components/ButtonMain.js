import Button from '@mui/material/Button';


function ButtonMain({text, border, bg, variant, color}) {
    return ( 
        <Button  variant={variant} sx={{p:2, textTransform:"none", fontSize: "18px",  textAlign: "center", lineHeight: "24px",  width:"200px", height:"50px", borderRadius:"5px", border:{border}, color:{color}, backgroundColor:{bg} }}>{text}</Button>
     );
}

export default ButtonMain;
