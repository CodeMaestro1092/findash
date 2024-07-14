import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import Navbar from "@/components/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem">
            <Navbar />
            <Router />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
