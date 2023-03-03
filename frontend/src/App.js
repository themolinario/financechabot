import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Welcome from "./scenes/welcome";
import CompileForm from "./scenes/form";
import {createTheme, ThemeProvider} from "@mui/material";
import ChatBot from "./scenes/chatbot/ChatBot";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#6fbf73',
        main: '#4caf50',
        dark: '#357a38',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="app">
      <main className="content">
        <TopBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<CompileForm />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
