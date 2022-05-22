import Box from '@mui/material/Box';
import { FaAlignJustify } from "react-icons/fa";
import Login from '../auth/Login';
function Toggle() {
    return ( 
        <Box>

        <Box sx={{display: {xs: "block", sm: "block", md: "none"}}}>
        <FaAlignJustify style={{color: "gray"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" size={30} />
        </Box>
        
        
        <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-56" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header flex items-center justify-between p-4">
                <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                <Login />
            </div>
        </div>
        </Box>
     );
}

export default Toggle;