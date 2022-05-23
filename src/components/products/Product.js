import Box from '@mui/material/Box';
import AppBarContainer from '../home/AppBarContainer';
import Header from '../home/Header';
import { futureProducts } from "../../products"
function Product() {
    let item = futureProducts()
    const bangle = item[4]
    console.log(bangle.image)
    return ( 
        <Box>
            <Header bangle={bangle.image} />
        </Box>
     );
}

export default Product;