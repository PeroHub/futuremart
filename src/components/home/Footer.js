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

function Footer() {
  return (
    <Box  mt={10}>
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
                className="head"
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "10px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Menu
              </li>
              <li>Home</li>
              <li>Products</li>
              <li>About FutureMart</li>
            </div>

            <div className="productBox">
              <li
                className="head"
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "10px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Products
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
                className="head"
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "10px",
                  fontStyle: "normal",
                  fontFamily: "Open Sans",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Help
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
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Email address"
                  className="footer__search"
                />
                <span>
                  <button type="submit">Subscribe</button>
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
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFFFF",
                  fontSize: "50px",
                }}
              >
                <Typography
                  size={20}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaFacebook />
                </Typography>
                <Typography
                  size={20}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaInstagram />
                </Typography>
                <Typography
                  size={20}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaPhone />
                </Typography>
                <Typography
                  size={20}
                  sx={{
                    margin: "20px 10px",
                  }}
                >
                  <FaTwitter />
                </Typography>
                <Typography
                  size={20}
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

              <div
                id="line"
                style={{
                  width: "80%",
                  height: "20px",
                  background: "#FFFFF",
                  backgroundColor: "#FFFFF",
                  border: "1px solid #FFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <hr />
              </div>
            </div>
            <div id="final">
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
            </div>
          </div>
          <div id="final2" style={{ display: "none" }}>
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
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Footer;
