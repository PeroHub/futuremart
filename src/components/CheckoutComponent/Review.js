import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';

function Review() {
    const result = localStorage.getItem('userData')

    const value = JSON.parse(result)

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
                            value={value?.firstname}
                            disabled
                            required
                        />
                        <TextField
                            sx={{mt: {xs:2, sm:2, md: 0}}}
                            value={value?.lastname}
                            fullWidth
                            disabled
                            
                            required
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.address}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.phone}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.email}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.country}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.state}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.postal}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.city}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>

                    <Box sx={{mt:2}}>
                        <TextField
                            value={value?.comment}
                            fullWidth
                            disabled
                            required
                        />
                    </Box>
                    

                </Box>
            </CardContent>
        </Card>
        </Box>
     );
}

export default Review;