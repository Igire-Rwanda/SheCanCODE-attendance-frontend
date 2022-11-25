import * as React from "react";
import "./mainDashoard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const MentorDashoard =() =>{
    
    return (
        <>

     <div className="divContainer">
      <div className="topContainer">
      
      <Card sx={{ Width: '20rem',height:'12vh'}}>
    
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Total Students
        </Typography>
        <Typography variant="body2" color="text.secondary">
         45
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ Width: '20rem',height:'12vh'}}>
    
    <CardContent>
      <Typography gutterBottom variant="h2" component="div">
        Presents
      </Typography>
      <Typography variant="body2" color="text.secondary">
     40
      </Typography>
    </CardContent>
    
  </Card>
  <Card sx={{ Width: '20rem',height:'12vh'}}>
    
    <CardContent>
      <Typography gutterBottom variant="h3" component="div">
        Permissions
      </Typography>
      <Typography variant="body2" color="text.secondary">
       3
      </Typography>
    </CardContent>
    
  </Card>
  <Card sx={{ Width: '20rem',height:'12vh'}}>
    
    <CardContent>
      <Typography gutterBottom variant="h2" component="div">
        Absents
      </Typography>
      <Typography variant="body2" color="text.secondary">
       2
      </Typography>
    </CardContent>
    
  </Card>
  
      </div>
      <div className="headerContainer">
      <h1>OVERVIEW</h1> 
      </div> 
      <div className="overviewContainer">
      {/* <h1>OVERVIEW</h1> */}
       
      <Card sx={{ Width: '20rem',height:'45rem',backgroundColor:'rgba(18, 135, 177, 0.3)',transform: 'rotate(0.32deg)'}}>
    
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Attendances Level
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ Width: '20rem',height:'45rem',backgroundColor:'rgba(18, 135, 177, 0.3)',transform: 'rotate(0.32deg)'}}>
    <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         Class Performances
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      </Card>
  <Card sx={{ Width: '20rem',height:'45rem',backgroundColor:'rgba(18, 135, 177, 0.3)',transform: 'rotate(0.32deg)'}}>
    
   
  <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         Permissions Level
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      </Card>
  <Card sx={{ Width: '20rem',height:'45rem',backgroundColor:'rgba(18, 135, 177, 0.3)',transform: 'rotate(0.32deg)'}}>
    
  <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         Absence Level
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      </Card>
  
      </div>
        </div>
        </>
    )
}
export default MentorDashoard;