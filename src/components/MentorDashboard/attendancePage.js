import * as React from "react";
import "./attendancePage.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

const AttendancePage = () =>{
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    }
    const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(false);
  }
    return (
        <>
        <div className="divContainer">
         <img src="https://res.cloudinary.com/drgtkm4m9/image/upload/v1666011276/Attendance/mn_kcfhpw.jpg"></img>
      
       <div className="formContainer" >
        <box>
       <FormControl
        sx={{position:'absolute',top:'20rem',left:'60rem',fontSize:'2rem'}}
        >
      <FormLabel id="demo-controlled-radio-buttons-group"> Make Attendance</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
     
    
     >
        <FormControlLabel value="present" control={<Radio />} label="present" 
    
    
        />
        <FormControlLabel value="absent" control={<Radio />} label="absent" />
      </RadioGroup>
    </FormControl>
    <LoadingButton
          size="small"
          color="secondary"
          sx={{width:'20ch',height:'4vh' ,position:'absolute',top:'30rem',left:'60rem',background:'#28ABE2'}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
    </box>
       </div>

        </div>
        </>
    )
}
export default AttendancePage ;