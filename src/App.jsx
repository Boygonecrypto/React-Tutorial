import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SingleTweet from "./pages/SingleTweet";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import DashboardLayout from "./pages/DashboardLayout";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<SingleTweet />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Children will be here */}
            <Route index element={<h1>Home Dashboard</h1>} />
            <Route path="trash" element={<h1>Trash Side</h1>} />
            <Route path="spam" element={<h1>Spam Side</h1>} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
