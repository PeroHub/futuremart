import Button from '@mui/material/Button';


function ButtonMain({text, border, bg, variant, size, color, height, width, fontSize, mt}) {
    return ( 
        <Button variant={variant} size={size} sx={{p:2, textTransform:"none", marginTop:{mt}, fontSize:{fontSize},  textAlign: "center", lineHeight: "24px", borderRadius:"5px", border:{border}, color:{color}, backgroundColor:{bg}, width:{width}, height:{height} }}>{text}</Button>
     );
}

export default ButtonMain;
