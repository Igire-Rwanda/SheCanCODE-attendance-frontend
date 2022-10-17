import * as React from "react";
import "./registeringStudentsDashboard.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import CancelIcon from '@mui/icons-material/Cancel';
const RegisterStudents  = () =>{
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(false);
  }
    return(
        <>
        <div className="reggisterContainer" >
      <h1>Registering Students</h1>  
      <div className="formContainer">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },display:'grid',
        gridTemplateColumns: 'repeat(2,2fr)',left:'50rem',position:'absolute',top:'-10rem'
      }
    }
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Names"
          defaultValue=""
        />
        <TextField
           required
           id="outlined-required"
           label="Email"
           defaultValue=""
        />
        <TextField
          id="outlined-required"
          label="Program"
          defaultValue=""
        />
        <TextField
          id="outlined-required"
          label="Cohort"
          defaultValue=""
         
        />
        <TextField
          id="outlined-number"
          label="ClassName"
        
          
        />
      
       
      </div>
      <LoadingButton
          size="small"
          color="secondary"
          sx={{width:'10ch',height:'4vh' ,position:'absolute',top:'38rem',left:'5rem',background:'#28ABE2'}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          sx={{width:'10ch',height:'4vh' ,position:'absolute',top:'38rem',left:'25rem',background:'#28ABE2'}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<CancelIcon />}
          variant="contained"
        >
          Cancel
        </LoadingButton>
    </Box>
      </div>
      </div>
        </>
    )
}

export default RegisterStudents ;