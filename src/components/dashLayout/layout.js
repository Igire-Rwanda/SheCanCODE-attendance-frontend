import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./header";
import Sider from "./sider";
const Comp = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item spacing={2} xs={12} sm={2}>
          <Sider items={props.siderItems} />
        </Grid>
        <Grid item spacing={2} xs={12} sm={10} sx ={{padding:'2rem'}}>
          <Header />
          <Box sx={{ width: "100%",minHeight:'90vh',padding:2, paddingLeft:10, backgroundColor:'rgba(18, 135, 177, 0.1)' }}>{props.children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comp;