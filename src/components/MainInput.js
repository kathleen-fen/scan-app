import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useWorkingList } from "../context/WorkingList";

const MainInput = () => {
  const inputElement = useRef();
  const { addItem } = useWorkingList();
  const [currentCode, setCurrentCode] = useState("");
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField
        inputRef={inputElement}
        value={currentCode}
        onChange={(e) => {
          setCurrentCode(e.target.value);
          addItem(e.target.value, 1);
          setCurrentCode("");
        }}
        label="QR код"
        autoFocus
        onBlur={() => {
          inputElement.current.focus();
        }}
      />
      {/*  <Button
        variant="contained"
        sx={{ ml: 2 }}
        onClick={() => {
          console.log("click");
            addItem(currentCode, 1);
          setCurrentCode(""); 
        }}
      >
        Добавить
      </Button> */}
    </Box>
  );
};

export default MainInput;
