import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from "./routes/Routes";
import Navbar from "./routes/Navbar";
import JoblyApi from "./api/api";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>

        </Navbar> 
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
