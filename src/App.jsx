import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import ImageGenerator from "./pages/ImageGenerator.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
