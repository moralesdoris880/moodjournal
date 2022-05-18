import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={}/> NEW ENTRY */}
        {/* <Route path="/login" element={}/> LIST OF PAGES */}
        {/* <Route path="/signup" element={}/> SIGNUP PAGE */}
        {/* <Route path="/login" element={}/> LOGIN PAGE */}
        {/* <Route path="/" element={<Home />}/> HOME PAGE */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
