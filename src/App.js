import logo from "./logo.svg";
import "./App.css";
import GridData from "./components/GridData";
import { Box } from "@mui/system";
import "../src/css/style.css";
import Header from "./components/Header";

//import { ReactDOM } from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
function App() {
  return (
    <div>
      <Header />
      <GridData />
      <div class="footer">
        <Box textAlign="center" pt={{ xs: 5, sm: 2 }} pb={{ xs: 5, sm: 3 }}>
          <a href="https://www.highradius.com/privacy-policy/" target="_blank"
style={{textDecoration:"none", color:"white"}}
>Privacy Policy.</a>
          &copy; | High Radius Corporation. All Rights reserved.
        </Box>
      </div>
    </div>
  );
}

export default App;
