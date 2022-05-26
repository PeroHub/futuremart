import { Button } from "@mui/material";
import { Link } from "react-router-dom"
function Error() {
    return ( 
       <div>
            <div>Opps!! page not found</div>
            <p>We are very sorry for the inconvenience. It seems you are trying to access a page that has been removed or does not exist</p>
            <Link to="/">
                <Button variant="contained">Homepage</Button>
            </Link>
       </div>
     );
}

export default Error;