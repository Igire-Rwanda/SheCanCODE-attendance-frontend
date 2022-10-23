import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import "./studentdashlayout.css";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          
          width: "100%",
          height: 90,
        },
      }}
    >
      <Paper elevation={5} className = "student-header__search"> 

      <TextField
          id="filled-search"
          label = "select search"
          type="search"
          className="student__search"
        />
      
        <SearchIcon  
         className="student__search-icon"
          fontSize="large"
        />
        <NotificationsIcon 
        className="student__notification-icon"
        fontSize="large"/>
      
      
      
      </Paper>
    </Box>
  );
}
