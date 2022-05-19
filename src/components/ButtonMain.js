import Button from '@mui/material/Button';

function ButtonMain({text}) {
    return ( 
        <Button  variant='contained' sx={{p:2, fontWeight: "550px", fontSize: "18px", textAlign: "center", lineHeight: "24px", borderRadius: "5px"}}>{text}</Button>
     );
}

export default ButtonMain;