import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h1> ERROR PAGE</h1>
      <Button onClick={() => navigate("/")}> Volver a Home </Button>
    </div>
  );
};

export default ErrorPage;
