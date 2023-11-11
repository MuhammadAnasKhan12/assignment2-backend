import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
          Signup
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => fillModel("username", e.target.value)}
          variant="outlined"
          margin="normal"
          label="UserName"
        />
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
          Signup
        </Button>
      </Paper>
    </Box>
  );
}
