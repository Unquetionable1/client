import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  // Fix typo in function name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
        // You can add further handling of the response here, like redirecting the user
      } else {
        const error = await response.json();
        console.error("Login failed:", error);
      }
    } catch (error) {
      console.error(error);
    }
    console.log("Form submitted:", formData);
    // Add logic to handle form submission (e.g., API request)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name" // Add id attribute
            name="name" // Add name attribute
            value={formData.name}
            onChange={handleChange} // Fix function name
            required
          />
        </label>
        <br /> {/* Add line break for spacing */}
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password" // Add id attribute
            name="password" // Add name attribute
            value={formData.password}
            onChange={handleChange} // Fix function name
            required
          />
        </label>
        <br /> {/* Add line break for spacing */}
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Don't have an account? Register here.</Link>
    </>
  );
}
