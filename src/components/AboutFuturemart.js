import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../components/home/Footer.js";
import AppBarContainer from "../components/home/AppBarContainer.js";
import logo from "../images/whiteLogo.png";
function AboutFuturemart() {
  return (
    <Box>
      <Box id="genenral">
        <AppBarContainer />
        <Box
          id="full"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            backgroundColor: "#FBFBFB",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            id="flex1"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "23px" },
                lineHeight: "36.19px" ,
                letterSpacing: "0.02em",
                color: "#474747",
                // paddingLeft: {lg: "3rem"}
                
              }}
            >
              <Typography
                sx={{
                  marginTop: "15px",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "23px" },
                }}
              >
                FutureMart allows people to easily buy products (swags) branded
                by FutureLabs.
              </Typography>
              <Typography
                sx={{
                  marginTop: "15px",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "23px" },
                }}
              >
                It is a subsidiary of FutureLabs, one of the top tech companies
                in the Akwa Ibom State.
              </Typography>
              <Typography
                sx={{
                  marginTop: "15px",
                  fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "23px" },
                }}
              >
                As a key partner in the digitalization of commerce, FutureMart
                aims to become the reference commerce platform for the growth of
                businesses around the world, by building on its values:
                audacity, proximity, tenacity, and engagement.
              </Typography>
            </Box>
          </Box>

          {/* <Box
            id="flex2"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "50%",
            }}
          >
            
          </Box> */}
          <Box
            id="backGround flex2"
            sx={{
              width: {xs: "100%", sm: "100%", md: "50%", lg: "50%"},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px",
              marginTop: "30px",
            }}
          >
            <Box
              id="white"
              sx={{
                width: { xs: "230px", sm: "270px", md: "380px", lg: "452px" },
                height: { xs: "230px", sm: "270px", md: "380px", lg: "452px" },
                border: {
                  xs: "13px solid rgba(13, 10, 184, 0.8)",
                  sm: "13px solid rgba(13, 10, 184, 0.8)",
                  lg: "26px solid rgba(13, 10, 184, 0.8)",
                  md: "20px solid rgba(13, 10, 184, 0.8)",
                },
                borderRadius: "50%",
                boxSizing: "border-box",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                id="lightOrange"
                sx={{
                  width: { xs: "180px", sm: "220px", md: "290px", lg: "349px" },
                  height: {
                    xs: "180px",
                    sm: "220px",
                    md: "290px",
                    lg: "349px",
                  },
                  backgroundColor: "#ED8204",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  id="image"
                  sx={{
                    width: {
                      xs: "160px",
                      sm: "200px",
                      lg: "296px",
                      md: "250px",
                    },
                    height: {
                      xs: "160px",
                      sm: "200px",
                      lg: "296px",
                      md: "250px",
                    },
                    backgroundColor: "#F46327",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={logo} alt="" srcset="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default AboutFuturemart;
