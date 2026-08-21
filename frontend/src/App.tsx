import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UnderDevelopment from "./pages/UnderDevelopment/UnderDevelopment";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<UnderDevelopment />} />
        <Route path="/docs" element={<UnderDevelopment />} />
        <Route path="/features" element={<UnderDevelopment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<UnderDevelopment />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch-all route for pages that don't exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;