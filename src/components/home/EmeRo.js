import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FiMail } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Box sx={{ border: "1px solid red", width: "100%" }}>
      <Box id="flex1" sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <Box
          className="menuBox"
          sx={{
            border: "1px solid maroon",
            width: { xs: "50%", sm: "50%" },
            flexWrap: "wrap",
            color: "#FFF",
            padding: { xs: "10px", sm: "10px" },
          }}
        >
          <Typography
            variant="p"
            component
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Open Sans",
              textAlign: "right",
            }}
          >
            Menu
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              margingBottom: "10px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Home
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              margingBottom: "10px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Products
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              margingBottom: "10px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            About FutureMart
          </Typography>
        </Box>

        <Box
          className="productBox"
          sx={{
            border: "1px solid purple",
            width: { xs: "50%", sm: "50%" },
            flexWrap: "wrap",
            padding: { xs: "10px", sm: "10px" },
          }}
        >
          <Typography
            variant="p"
            component
            sx={{
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Open Sans",
              textAlign: "right",
            }}
          >
            Products
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Polos
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Bangles
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Jotters
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Stickers
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Biros
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              marginBottom: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Hoodies
          </Typography>
        </Box>
      </Box>
      <Box
        className="flex2"
        sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}
      >
        <Box
          className="helpBox"
          sx={{
            border: "1px solid purple",
            width: { xs: "50%", sm: "50%" },
            flexWrap: "wrap",
            color: "#FFF",
            padding: { xs: "10px", sm: "10px" },
          }}
        >
          <Typography
            variant="p"
            component
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Open Sans",
              textAlign: "right",
            }}
          >
            Help
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              marginBottom: "12px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            FAQs
          </Typography>

          <Typography
            variant="p"
            component
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              marginBottom: "12px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Shipping
          </Typography>
        </Box>
        <Box
          className="contactBox"
          sx={{
            border: "1px solid purple",
            width: { xs: "50%", sm: "50%" },
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              marginBottom: "12px",
              lineHeight: "24px",
              color: "#FFFFF",
            }}
          >
            Sign up for our newsletters
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            size="normal"
            sx={{
              height: "40px",
            }}
          ></TextField>
          {/* <ButtonMain {text: text} */}
          <button
            sx={{
              backgroundColor: "#414744",
              borderRadius: "0px 5px 5px 0px",
              width: "110px",
              height: "40px",
            }}
          >
            Subscribe
          </button>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "15px",
              color: "#FFFFFF",
            }}
          >
            By submitting this email, I agree FutureMart can send newsletters.
            You can unsubscribe by using the link in the emails sent to you.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "24px",
            }}
          >
            Feel free to contact us via :{" "}
          </Typography>
          <Box>
            <Box className="facebook">
              <FaFacebook />
            </Box>
            <Box className="twitter">
              <FaTwitter />
            </Box>
            <Box className="instagram">
              <FaInstagram />
            </Box>
            <Box className="youtube">
              <FaYoutube />
            </Box>
            <Box className="mail">
              <FiMail />
            </Box>
            <Box className="phone">
              <FaPhone />
            </Box>
          </Box>
          <Box>
            {/* <div className="line" sx={{border: "0.5px solid #FFFFF", width: "100%", paddingBottom: "2px"}}></div> */}
          </Box>

          <Box className="copyrigh" t>
            © Copyright 2007-2022 FutureMart. All rights reserved
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
