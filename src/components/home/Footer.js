import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Footer.css";
import footerLogo from "../../images/footerLogo.png";
import { FiMail } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer({mt}) {
  return (
    <Box mt={mt}>
      <div className="footer">
        <div className="holder">
          <div
            className="flex1"
            style={{
              color: "#FFFF",
              width: "100%",
            }}
            sx={{
              backgroundColor: "maroon",
            }}
          >
            <div className="menuBox">
              <li
                className="head left "
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "20px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "center", lg: "left" },
                    fontSize: { xs: "16px", md: "16px", lg: "16px" },
                    marginTop: { xs: "40px", md: "24px", lg: "24px" },
                  }}
                >
                  Menu
                </Typography>
              </li>
              <li>Home</li>
              <li>Products</li>
              <li>About FutureMart</li>
            </div>

            <div className="productBox">
              <li
                className="head left"
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "20px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "center", lg: "left" },
                    fontSize: { xs: "16px", md: "16px", lg: "16px" },
                    marginTop: { xs: "40px", md: "10px", lg: "10px" },
                  }}
                >
                  {" "}
                  Products
                </Typography>
              </li>

              <li>Polos</li>
              <li>Bangles</li>
              <li>Jotters</li>
              <li>Stickers</li>
              <li>Biros</li>
              <li>Cardigan</li>
              <li>Hoodies</li>
            </div>
          </div>

          <div
            className="flex2"
            style={{
              color: "#FFFF",
              width: "100%",
            }}
          >
            <div className="helpBox">
              <li
                className="head left"
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "20px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "left", lg: "left" },
                    fontSize: { xs: "16px", md: "16px", lg: "16px" },
                    marginTop: { xs: "40px", md: "24px", lg: "24px" },
                  }}
                >
                  Help
                </Typography>
              </li>

              <li>FAQs</li>
              <li>Shipping</li>
            </div>

            <div className="contactBox">
              <div
                className="head sign"
                style={{
                  marginTop: "25px",
                }}
              >
                Sign up for our newsletters
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <input
                  type="text"
                  placeholder="Email address"
                  className="footer__search"
                />
                <span>
                  <button
                    type="submit"
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    Subscribe
                  </button>
                </span>
              </span>

              <p className="footer__writeup">
                By submitting this email, I agree FutureMart can send
                newsletters. You can unsubscribe by using the link in the emails
                sent to you.
              </p>

              <p className="bold">Feel free to contact us via:</p>

              <Box
                id="icons"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "left" },
                  alignItems: "center",
                  color: "#FFFFF",
                  fontSize: "50px",
                }}
              >
                <Typography
                  size={50}
                  sx={{
                    margin: "20px 10px",
                    marginLeft: "0px",
                  }}
                >
                  <FaFacebook />
                </Typography>
                <Typography
                  size={50}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaInstagram />
                </Typography>
                <Typography
                  size={50}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaPhone />
                </Typography>
                <Typography
                  size={50}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaTwitter />
                </Typography>
                <Typography
                  size={50}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaYoutube />
                </Typography>
                <Typography
                  size={"100px"}
                  sx={{
                    margin: "20px 20px",
                  }}
                >
                  <FiMail />
                </Typography>
              </Box>
              <Box
                id="mobileLine"
                sx={{
                  display: { md: "none", lg: "none" },
                  width: { xs: "100%", md: "0px", lg: "0px" },
                  marginRight: { xs: "auto" },
                  marginLeft: { xs: "auto" },
                  marginTop: { md: "20px" },
                }}
              >
                <hr />
              </Box>
            </div>
            <div
              id="final"
              style={{
                display: { sm: "none", md: "none", lg: "none" },
                paddingBottom: { xs: "20px" },
              }}
            >
              <div
                id="finalFlex1"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: { xs: "25px" },
                }}
              >
                <img
                  id="logo"
                  src={footerLogo}
                  alt='futuremart__logo'
                  style={{
                    marginLeft: "10px",
                    width: "44px",
                    height: "44px",
                  }}
                ></img>
              </div>
              <div id="finalFlex2">
                <Typography
                  id="copyright"
                  sx={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "15px",
                    paddingBottom: { xs: "25px" },
                    color: "white",
                  }}
                >
                  © Copyright 2007-2022 FutureMart. All rights reserved
                </Typography>
              </div>
            </div>
          </div>
          {/* <div id="final2" style={{ display: "none" }}>
            <div
              id="finalFlex1"
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                id="logo"
                src={footerLogo}
                style={{
                  marginLeft: "10px",
                  width: "44px",
                  height: "44px",
                }}
              ></img>
            </div>

            <div id="finalFlex2">
              <Typography
                id="copyright"
                sx={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "white",
                }}
              >
                © Copyright 2007-2022 FutureMart. All rights reserved
              </Typography>
            </div>
          </div> */}
        </div>
      </div>

      <Box
        id="mdScreenDisplay large"
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          width: { lg: "100%", md: "100%" },
          backgroundColor: { md: "#1e3272", lg: "#1e3272" },
        }}
      >
        <Box
          sx={{
            display: { md: "block", lg: "block" },
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* <hr /> */}
        </Box>
        <div
          id="final2"
          style={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
            width: { lg: "100%", md: "100%" },
            height: { lg: "fit-content", md: "fit-content" },
          }}
        >
          <div
            id="finalFlex3"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              id="logo"
              alt='logo'
              src={footerLogo}
              style={{
                marginLeft: "10px",
                width: "44px",
                height: "44px",
              }}
            ></img>
          </div>

          <div id="finalFlex4">
            <Typography
              id="copyright"
              sx={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "20px",
                color: "white",
              }}
            >
              © Copyright 2007-2022 FutureMart. All rights reserved
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Footer;
