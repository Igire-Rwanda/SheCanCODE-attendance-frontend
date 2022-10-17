// import React from "react";
import * as React from 'react';

import "./signin.css";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';



const SignIn = () =>{
  
  const [values, setValues] = React.useState({
    password: '',
    
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
 
      

  
    return(
        <>
       
        <div className="signContainer">
            <div className="imgContainer">
           
           <img src="https://res.cloudinary.com/drgtkm4m9/image/upload/v1665407692/Attendance/p_mqkfwc.svg" alt="image"/>
            </div>
           
        <div className="form">
        <h1>Login Form</h1>
      
        <Box sx={{ display:'block', flexWrap: 'wrap'}}>
      <div>
     
        <TextField
         label="Enter your email" 
         id="outlined-size-normal" 
         sx={{ m: 1, width: '35ch', position:'absolute',left:'12rem',top:'10rem'}}
         defaultValue="Enter your email" />
        
        <FormControl sx={{ m: 1, width: '35ch',position:'absolute',top:'17rem',left:'12rem'
       }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
      
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" 
       sx={{ '& .MuiSvgIcon-root': { fontSize: 28 },
       
       
       position:'absolute',left:'13rem',top:'25rem'}}
     

      />
      
      <a href='#' style={{position:'absolute',left:'27rem',top:'27rem'}}>Forgot Password</a>
      <Button variant="contained" 
         sx={{  width: '22ch', position:'absolute',left:'18rem',top:'33rem'}}
       
       >Login</Button>
    </Box>
        
        </div>

           
        </div>
        </>
    )
}
export default SignIn