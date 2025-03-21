import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AppRoutes() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto p-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default AppRoutes;