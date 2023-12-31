import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: any, val: any) => {
    setModel({ ...model, [key]: val });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Paper sx={{ padding: "20px", maxWidth: "400px", width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => fillModel("email", e.target.value)}
          variant="outlined"
          margin="normal"
          label="Email"
        />
        <TextField
          fullWidth
          onChange={(e) => fillModel("password", e.target.value)}
          variant="outlined"
          margin="normal"
          type="password"
          label="Password"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Login
        </Button>
        <div>
          <span style={{ color: "red" }}>Dont have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </Paper>
    </Box>
  );
};

export default Login;
