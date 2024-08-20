import { Box, Button, TextField } from "@mui/material";
import { Fragment, useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
   const name=event.target.name;
   let value=event.target.value; 
   console.log(event.target)
   setInputs({
    ...inputs,
    [name]:value
   })
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(inputs)
  }
  return (
    <Fragment>
      <Box onSubmit={handleSubmit} component="form" sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          name="name"
          type="text"
          variant="standard"
          color="primary"
          size="large"
          sx={{ width: "250px" }}
          required
          placeholder="Enter Your Name"
        />

        <TextField
          value={inputs.userName}
          onChange={handleChange}
          name="userName"
          type="text"
          variant="standard"
          color="primary"
          size="large"
          margin="normal"
          sx={{ width: "250px" }}
          required
          placeholder="Enter Your User Name"
        />

        <TextField
          value={inputs.email}
          onChange={handleChange}
          type="email"
          name="email"
          variant="standard"
          sx={{ width: "250px" }}
          size="large"
          color="primary"
          margin="normal"
          required
          placeholder="Enter Your E-mail"
        />

        <TextField
          value={inputs.password}
          onChange={handleChange}
          name="password"
          type="password"
          variant="standard"
          size="large"
          color="primary"
          margin="normal"
          required
          sx={{ width: "250px" }}
          placeholder="Enter Your Password"
        />
        <Button variant="contained" sx={{width:"100px"}} type="submit">Submit</Button>
      </Box>
    </Fragment>
  );
}
