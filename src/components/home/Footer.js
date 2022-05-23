import Box from "@mui/material/Box";
import "./Footer.css";

function Footer() {
  return (
    <Box  mt={15}>
      <div className="footer">
        <div className="footer__left">
          <div className="footer__leftOptions">
            <li className="head">Menu</li>
            <li>Home</li>
            <li>Products</li>
            <li>About FutureMart</li>
          </div>
          <div className="footer__leftOptions">
            <li className="head">Products</li>
            <li>Polos</li>
            <li>Bangles</li>
            <li>Jotters</li>
            <li>Stickers</li>
            <li>Biros</li>
            <li>Cardigan</li>
          </div>

          <div className="footer__leftOption">
            <li className="head">Help</li>
            <li>FAQs</li>
            <li>Shipping</li>
          </div>
        </div>

        <div className="footer__right">
          <div className="head">Sign up for our newsletters</div>
          <input type="text" className="footer__search" />
          <button type="submit">Subscribe</button>

          <p className="footer__writeup">
            By submitting this email, I agree FutureMart can send newsletters.
            You can unsubscribe by using the link in the emails sent to you.
          </p>

          <p className="bold">Feel free to contact us via:</p>
          <div className="icons">
            <div>fa</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <div>tw</div>
            <div>ig</div>
            <div>yt</div>
            <div>gm</div>
            <div>ph</div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Footer;
