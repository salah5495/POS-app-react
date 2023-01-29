import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home Page />} />
        <Route path="/pos" element={<POSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
