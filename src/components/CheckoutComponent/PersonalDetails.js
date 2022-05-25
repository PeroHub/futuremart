import React from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import { useAuth0 } from '@auth0/auth0-react';




function PersonalDetails() {
    

    // const handleUserChange =(event) => {
    //     setUserData(prev => ({
    //         ...prev, [event.target.name]: event.target.value
    //     }))
    //     //storing value in local storage
        
    // }

    const result = localStorage.getItem('userData')

    const value = JSON.parse(result)

    const {  isAuthenticated, user } = useAuth0()

    
    console.log(isAuthenticated)
    console.log(user)
    


    return ( 
        <Box>
            <Card>
            <CardContent>
                <Typography color="#747474">Shipping</Typography>
                <Box
                
                sx={{p:2}}
                >
                    <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", gap: 2}}>
                        <TextField
                            fullWidth
                            name="firstname"
                            value={value?.firstname}
                            placeholder="First Name"
                            
                            type="text"
                            required
                        />
                        <TextField
                            sx={{mt: {xs:2, sm:2, md: 0}}}
                            name="lastname"
                            value={value?.lastname}
                            placeholder="Last Name"
                            fullWidth
                            type="text"
                            
                            required
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TextField
                            name="address"
                            value={value?.address}
                            placeholder="Address"
                            fullWidth
                            type="text"
                           
                            required
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TextField
                            name="phone"
                            value={value?.phone}
                            placeholder="Phone Number"
                            fullWidth
                            type="number"
                            
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            name="email"
                            value={value?.email}
                            placeholder="Email Address"
                            fullWidth
                            type="email"
                            
                            required
                        />
                    </Box>
                    

                </Box>
            </CardContent>
        </Card>
        </Box>
     );
}

export default PersonalDetails;