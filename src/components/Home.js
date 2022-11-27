import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Container, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Container
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      ></Container>
    </Box>
  );
};
export default HomePage;
