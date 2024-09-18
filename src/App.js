
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import DownloadApp from "./components/Sections/DownloadApp";

function App() {
  return (
    <div className="App">
    
     <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
