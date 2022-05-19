import './App.css';

import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { futureTheme } from "./theme"
import Home from './components/home/Home';



const theme = createTheme({
    palette: {
        primary: {
          main: '#0D0AB8'
        },
        secondary: {
          main: '#414744'
        }
    },
    typography: {
      fontFamily: "Inter"
    },
    shape: {
      borderRadius: 0
    }
})

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
