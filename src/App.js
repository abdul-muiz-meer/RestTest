import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [errors, setErrors] = React.useState({
      firstName: "",
      lastName: "",
      email: ""
    });

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      var isValidForm = true;
      let errors = {}
      if(!firstName){
        isValidForm = false;
        errors["firstName"]= "First Name is required";
      }
      if(!lastName){
        isValidForm = false;
        errors["lastName"]= "Last Name is required";
      }
      if(!email){
        isValidForm = false;
        errors["email"]= "Email is required";
      }
      else if(!validateEmail(email)){
        isValidForm = false;
        errors["email"]= "Email format is invalid.";
      }

      setErrors(errors);

      if(isValidForm){
        toast.success("Form is valid", {position: "top-left"});
      }
      else{
        toast.error("Invalid data provided, please check.",{position: "top-right"});
      }
    }

  return (
    <>
    <Box component="form" noValidate autoComplete="off"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gridTemplateColumns: { sm: '1fr 1fr 1fr' },
      gap: 5,
      marginTop: "50px"
    }}
    >
      <ToastContainer />
      <TextField label="First Name" variant="outlined" sx={{width: '30%'}} value={firstName} onChange={(e)=>setFirstName(e.target.value)}
        error={errors.firstName}
        helperText={errors.firstName ? errors.firstName : ""}/>
      <TextField label="Last Name" variant="outlined" sx={{width: '30%'}} value={lastName} onChange={(e)=>setLastName(e.target.value)}
        error={errors.lastName}
        helperText={errors.lastName ? errors.lastName : ""}/>
      <TextField label="Email" variant="outlined" sx={{width: '30%'}} value={email} onChange={(e)=>setEmail(e.target.value)}
        error={errors.email}
        helperText={errors.email ? errors.email : ""}/>

      <Button variant="contained" sx={{width: '20%'}} onClick={handleSubmit}>Submit</Button>
    </Box>



{/* 
    <div style={{background: "white"}}>
      <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
        <div style={{color: "red"}}>{errors.firstName}</div>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)} />
        <div style={{color: "red"}}>{errors.lastName}</div>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} />
        <div style={{color: "red"}}>{errors.email}</div>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
      </form>
      

    </div> */}
    </>
  );
}

export default App;
