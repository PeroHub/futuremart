import React, { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { country } from "../../Countries"
import { naijaState } from "../../Countries"

const initialState = {
    firstname: '',
    lastname: '',
    address: '',
    phone: null,
    country: '',
    state: '',
    email: '',
    city: '',
    postal: null,
    comment: ''
}
function Shipping() {
    let countryList = country()
    let allState = naijaState()

    const [ countryName ] = useState(countryList)
    const [ stateName ] = useState(allState)
   

    

    const [ userData, setUserData ] = useState(initialState)
    // const [ finalUserData, setFinalUserData ]  =useState(userData)

    const handleUserChange =(event) => {
        setUserData(prev => ({
            ...prev, [event.target.name]: event.target.value
        }))
        //storing value in local storage
        localStorage.setItem('userData', JSON.stringify(userData))
    }
    
    

    const result = localStorage.getItem('userData')
    const value = JSON.parse(result)

   


   
  

   


    return ( 
        <Card>
            <CardContent>
                <Typography color="#747474">Shipping</Typography>
                <Box
                component="form"
                sx={{p:2}}
                key={value}
                >
                    <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", gap: 2}}>
                        <TextField
                            fullWidth
                            name="firstname"
                            value={value?.firstname}
                            placeholder="First Name"
                            onChange={handleUserChange}
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
                            onChange={handleUserChange}
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
                            onChange={handleUserChange}
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
                            onChange={handleUserChange}
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
                            onChange={handleUserChange}
                            required
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                       
                        <FormControl fullWidth>
                            <Select
                            name="country"
                            onChange={handleUserChange}
                            value={value?.country}
                            
                            >
                                {countryName.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                                ))}
                        
                            
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{mt:2}}>
                       
                        <FormControl fullWidth>
                            <Select
                            name="state"
                            onChange={handleUserChange}
                            value={value?.state}
                            
                            >
                                {stateName.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                                ))}
                        
                            
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{display: {xs: "block", md: "grid"}, gridTemplateColumns: "1fr 1fr", gap: 2, mt:2}}>
                        <TextField
                            fullWidth
                            name="city"
                            value={value?.city}
                            onChange={handleUserChange}
                            placeholder="City"
                            type="text"
                            required
                        />
                        <TextField
                            name="postal"
                            value={value?.postal}
                            placeholder="Postal Code"
                            onChange={handleUserChange}
                            fullWidth
                            type="number"
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            name="comment"
                            value={value?.comment}
                            onChange={handleUserChange}
                            placeholder="Order Comment"
                            fullWidth
                            type="text"
                            required
                        />
                    </Box>
                    

                </Box>
            </CardContent>
        </Card>
     );
}

export default Shipping;