import * as React from "react";
import "./permission.css";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import CancelIcon from '@mui/icons-material/Cancel';

const Permissions = () =>{
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
      setLoading(false);
    }
    return(
        <>
<div className="divContainer">
    <h1>REQUEST PERMISSION</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <Stack spacing={3}  sx={{width:'50ch',position:'absolute',left:'55rem',top:'12rem'}}>
    
        <DateTimePicker
       
          label="Date&Time picker  "
          value={value}
          inputFormat="DD/MM/YY"
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </Stack>
    </LocalizationProvider>
<div className="formContainer">
  <p>Your reasons</p>
  <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Empty"
      style={{ width: '50ch',top:'10rem',position:'absolute',left:'18rem',height:'25rem' }}
    />
    <LoadingButton
          size="small"
          color="secondary"
          sx={{width:'20ch',height:'4vh' ,position:'absolute',top:'38rem',left:'18rem',background:'#28ABE2'}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          endIcon={<SendIcon />}
          variant="contained"
        >
        Send
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          sx={{width:'20ch',height:'4vh' ,position:'absolute',top:'38rem',left:'36rem',background:'#28ABE2'}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<CancelIcon />}
          variant="contained"
        >
          Cancel
        </LoadingButton>
</div>
</div>
        </>
    )
}
export default Permissions;