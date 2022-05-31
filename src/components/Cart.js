import React from "react";
import AppBarContainer from "../components/home/AppBarContainer";
import Box from "@mui/material/Box";
import whitePolo from "../images/whiteFTPolo.png";
import Typography from "@mui/material/Typography";

function Cart() {
  return (
    <Box id="generalBox" sx={{}}>
      <AppBarContainer />
      <Box
        id="cartContainer"
        sx={{
          //FAFCFD,
          height: { lg: "618px", xs: "209px" },
          backgroundColor: "#f3f8fa",
          borderRadius: "2px",
          //   width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          id="checkoutProductBox"
          sx={{
            width: { lg: "631px", xs: "300px" },
            height: { lg: "307px", xs: "170px" },
            backgroundColor: " #FFFFFF",
            borderRadius: "2px",
            padding: { xs: "20px" },
          }}
        >
          <Box
            id="checkoutImage"
            sx={{
              width: { xs: "200px", lg: "287px" },
              height: { xs: "110px", lg: "265px" },
              borderRadius: "5px",
              display: { xs: "flex" },
            }}
          >
            <img
              src={whitePolo}
              alt="checkoutImage"
              style={{
                width: "100%",
              }}
            />
            <Box
              id="checkoutProductName"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: { xs: "14px", lg: "24px" },
                lineHeight: { xs: "17px", lg: "29px" },
                letterSpacing: "0.01em",
                color: "#949494",
                marginRight: { xs: "40px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", lg: "24px" },
                  lineHeight: { xs: "17px", lg: "29px" },
                  fontWeight: "bold",
                }}
              >
                FutureLabs Polo(white)
              </Typography>
            </Box>
            <Box
              id="qty"
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "22px",
                letterSpacing: "0.01em",
                color: "#949494;",
              }}
            >
              {/* <button
                sx={{
                  display: { xs: "flex" },
                  alignItems: { xs: "center" },
                  flexDirection: { xs: "row" },
                }}
              >
                -
              </button> */}
              <p sx={{}}>2</p>
              {/* <button
                sx={{
                  display: { xs: "flex" },
                  alignItems: { xs: "center" },
                  flexDirection: { xs: "row" },
                }}
              >
                +
              </button> */}
            </Box>
          </Box>
          <Box
            id="checkout"
            sx={{ display: { xs: "flex" }, alignItems: { xs: "center" } }}
          >
            <Box
              id="remove price"
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: { lg: "24px", xs: "15px" },
                letterSpacing: "0.01em",
                color: "#FA1C1C",
                width: "105px",
                height: "29px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "0px",
              }}
            >
              <button
                style={{
                  outline: "none",
                  border: "none",
                }}
              >
                REMOVE
              </button>
            </Box>

            <Typography
              id="price"
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "22px",
                letterSpacing: "0.01em",
                color: "#949494;",
                textAlign: "right",
                width: "100%",
                marginLeft: { xs: "15px" },
                marginBottom: { xs: "0px" },
              }}
            >
              {" "}
              ₦2,200.00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
