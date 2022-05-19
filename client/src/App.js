import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes> 
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <BottomBar />
     </div>
    </BrowserRouter>
  )
}

export default App;


// {/* <Route path="/login" element={}/> NEW ENTRY */}
//         {/* <Route path="/login" element={}/> LIST OF PAGES */}
//        

