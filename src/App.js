import "./App.css";

import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { futureTheme } from "./theme"
import Home from './components/home/Home';
import Product from './components/products/Product';
import Error from "./components/ErrPage"
import CheckoutPage from './components/CheckoutPage';
import AboutFuturemart from './components/AboutFuturemart';
import SavedProducts from './components/home/card';



const theme = createTheme({
  palette: {
    primary: {
      main: "#0D0AB8",
    },
    secondary: {
      main: "#414744",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  shape: {
    borderRadius: 0,
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutFuturemart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/savedproducts" element={<SavedProducts />}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
