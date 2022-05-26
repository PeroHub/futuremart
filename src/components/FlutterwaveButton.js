import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function App() {
  const config = {
    public_key: 'FLWPUBK_TEST-b434ac7a4afa5a1dfb4febac87fc301e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     <Box sx={{background:'#ED8204', textAlign: "center", p:2, color: "#fff"}}>
            <Typography>Total Price</Typography>
            <Typography sx={{fontSize: "2rem"}}>Payment</Typography>
        </Box>

      <Button
      variant='contained'
      sx={{width: "100%", mt:2}}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Click Here To Purchase
      </Button>
    </div>
  );
}