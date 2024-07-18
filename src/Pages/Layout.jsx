import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/Layout.css'; // Import the CSS file for styling

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-link">Home</Link>
            {/* Add more navigation links here */}
          </div>
          <div className="nav-center">
            {/* Add any centrally distributed links here */}
            {/* E.g., <Link to="/about" className="nav-link">About</Link> */}
          </div>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <h1>Contacts</h1>
      </footer>
    </div>
  );
}
