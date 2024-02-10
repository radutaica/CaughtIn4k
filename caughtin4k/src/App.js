import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound'; // Ensure you have this component

// Simple Layout component
function Layout({ children }) {
  return (
    <>
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content here */}
        <p>© 2024 Your Website</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
