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
        <div className="registerContainer" >
        <div className="register">
      <h1>Registering Students</h1>

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },display:'grid',
        gridTemplateColumns: 'repeat(2,2fr)',position:'absolute',top:'8rem',fontSize:'2rem',left:'10rem'
      }
    }
    >
      <div>
      <TextField
          required
          id="outlined-required"
        sx={{textAlign:'center',width:'50ch'}}
               defaultValue="Add New Student"
        />
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
        id="outlined-required"
        label="Address"
        defaultValue=""
       
      />
    
    <TextField
         id="outlined-required"
          label="Phone number"
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
          sx={{width:'20ch',height:'4vh' ,position:'absolute',top:'54rem',left:'5rem',background:'#28ABE2'}}
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
          sx={{width:'20ch',height:'4vh' ,position:'absolute',top:'54rem',left:'25rem',background:'#28ABE2'}}
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