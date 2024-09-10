import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeTo from "./HomeTo";
import Author from "./Author";
import Book from "./Book";
import Borrow from "./Borrow";
import Member from "./Member";
import Publisher from "./Publisher";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { FaHome, FaBook, FaUserAlt, FaBuilding, FaUsers, FaClipboardList } from 'react-icons/fa'; // Importing Font Awesome icons

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">Library Management</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link text-light" to="/">
                <FaHome className="me-2" /> Home
              </Link>
              <Link className="nav-link text-light" to="/books">
                <FaBook className="me-2" /> Books
              </Link>
              <Link className="nav-link text-light" to="/authors">
                <FaUserAlt className="me-2" /> Authors
              </Link>
              <Link className="nav-link text-light" to="/publishers">
                <FaBuilding className="me-2" /> Publishers
              </Link>
              <Link className="nav-link text-light" to="/borrow">
                <FaClipboardList className="me-2" /> Borrow
              </Link>
              <Link className="nav-link text-light" to="/members">
                <FaUsers className="me-2" /> Members
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomeTo />} />
          <Route path="/books" element={<Book />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/publishers" element={<Publisher />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/members" element={<Member />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
