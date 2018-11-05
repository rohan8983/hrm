import React from "react";
import TextField from "@material-ui/core/TextField";

export const CustomTextField = props => {
  return (
    <TextField
      id="outlined-read-only-input"
      label={`${props.label}`}
      value={` ${props.value} `}
      className={props.textField}
      margin="normal"
      InputProps={{
        readOnly: true
      }}
      fullWidth
      variant="outlined"
    />
  );
};
