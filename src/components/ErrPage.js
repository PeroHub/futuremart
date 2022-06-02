import Box from "@mui/material/Box";
import Footer from "./home/Footer.js";
// import Header from "./home/Header.js";
import cryingEmoji from "../images/cryingEmoji.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Box id="error general ">
      <Box
        id="holder"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          height: "0%",
          marginTop: { xs: "3rem" },
          marginBottom: "auto",
        }}
      >
        <Box
          id="image"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "140px", sm: "250px", lg: "313.67px" },
            height: { xs: "130px", sm: "210px", lg: "272.44px" },
          }}
        >
          <img
            src={cryingEmoji}
            alt="crying emoji"
            fontStyle={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box id="holder2">
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: { xs: "30px", sm: "40px", lg: "60px" },
                lineHeight: { lg: "73px", sm: "50px", xs: "25px" },
                letterSpacing: "0.03em",
                color: "#747474",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Oops, page not found
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: { lg: "24px", xs: "18px" },
                //   lineHeight: "29px",
                letterSpacing: "0.01em",
                color: "#747474",
                textAlign: "center",
                marginTop: "15px",
                // width: "70%",
                paddingLeft: { xs: "20px", sm: "80px", md: "200px" },
                paddingRight: { xs: "20px", sm: "80px", md: "200px" },
              }}
            >
              We are very sorry for the inconvenience. It seems you are trying
              to access a page that has been removed or does not exist.
            </Typography>

            <Link to="/">
              <Box
                sx={{
                  width: { lg: "490px", md: "450px", sm: "320px", xs: "200px" },
                  height: { lg: "49px", md: "46px", sm: "45px", xs: "40px" },
                  backgroundColor: "#0D08FF",
                  borderRadius: "4px",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: { lg: "23px", xs: "12px" },
                  fontSize: { lg: "20px", sm: "20px", xs: "18px" },
                  letterSpacing: "0.03em",
                  color: "#FFFFFF",
                  padding: "8px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "50px",
                }}
              >
                <button>Back to Homepage</button>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          width: "70%",
        }}
      >
        <Box>
          <Box
            id="image"
            sx={{
              backgroundColor: "blue",
              width: { lg: "313.67px", xs: "140px" },
              height: { lg: "272.44px", xs: "130px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={cryingEmoji} alt="crying emoji" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: { xs: "30px", lg: "60px" },
              lineHeight: { lg: "73px", xs: "25px" },
              letterSpacing: "0.03em",
              color: "#747474",
            }}
          >
            Oops, page not found
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: { lg: "24px", xs: "18px" },
              //   lineHeight: "29px",
              letterSpacing: "0.01em",
              color: "#747474",
              textAlign: "center",
            }}
          >
            We are very sorry for the inconvenience. It seems you are trying to
            access a page that has been removed or does not exist.
          </Typography>

          <Link to="/">
            <Box
              sx={{
                width: { lg: "490px", xs: "200px" },
                height: { lg: "49px", xs: "40px" },
                backgroundColor: "#0D08FF",
                borderRadius: "4px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: { lg: "23px", xs: "12px" },
                fontSize: { lg: "20px", xs: "18px" },
                letterSpacing: "0.03em",
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>Back to Homepage</button>
            </Box>
          </Link>
        </Box>
      </Box> */}
      <Footer />
    </Box>
  );
}

export default ErrorPage;
