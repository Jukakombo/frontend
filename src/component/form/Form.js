import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { createPost } from "../../actions";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  message: "",
  hastag: "",
  title: "",
  image: "",
};
function Form() {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const submitData = (e) => {
    e.preventDefault();

    clear();
    console.log(formData);
  };
  const clear = () => {
    setFormData({
      name: "",
      message: "",
      hastag: "",
      title: "",
      image: "",
    });
  };
  return (
    <Box
      onSubmit={submitData}
      style={{ border: "1px solid gray", marginTop: "10px" }}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography style={{ textAlign: "center" }}>CREATE POST</Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        autoFocus
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <TextField
        name="title"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <TextField
        name="message"
        value={formData.message}
        id="outlined-basic"
        label="Messsage"
        variant="outlined"
        fullWidth
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <TextField
        name="hastag"
        value={formData.hastag}
        onChange={(e) => setFormData({ ...formData, hastag: e.target.value })}
        id="outlined-basic"
        label="Hastag"
        variant="outlined"
        fullWidth
        required
      />
      <Button
        type="submit"
        fullWidth
        color="primary"
        variant="contained"
        style={{ marginTop: "10px" }}
      >
        {" "}
        Submit
      </Button>
      <Button
        type="button"
        onClick={clear}
        fullWidth
        style={{ color: "#fce4ec", marginTop: "10px" }}
        variant="contained"
        color="secondary"
      >
        {" "}
        Clear
      </Button>
    </Box>
  );
}
export default Form;
