"use client";
import React, { useState } from "react";
import { Box, Input, Button, Typography } from "@mui/material";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(""); // Clear error message as the user types
  };

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Add your form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Input
        disableUnderline
        value={email}
        onChange={handleInputChange}
        sx={{
          border: "1px solid #748278",
          borderRadius: "30px",
          color: "#748278",
          width: "300px",
          padding: "5px 20px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          outline: "none",
          "&:focus": {
            borderColor: "#0056b3",
            boxShadow: "0 0 5px rgba(0, 91, 179, 0.5)",
          },
        }}
        placeholder="Email address..."
        type="email"
        aria-label="Enter your email address"
      />
      {error && (
        <Typography
          sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
        >
          {error}
        </Typography>
      )}
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            borderRadius: "50px",
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "9px 40px",
            fontFamily: "Open Sans, Arial, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Notify Me
        </Button>
      </Box>
    </Box>
  );
};

export default Email;
