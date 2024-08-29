import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Fragment, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

export default function ToggleButtonComponent() {
  const [select, setSelect] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  const [selectThree, setSelectThree] = useState([]);
  const [selectFour, setSelectFour] = useState("");
  //   function handleChange(event, newSelect) {
  //     setSelect(newSelect);
  //     console.log(select);
  //     console.log(newSelect);
  //   }
  function handleChange(event) {
    const newSelect = event.target.value;
    setSelect(newSelect);
  }
  function handleChangeTwo(event) {
    const newSelect = event.target.value;
    setSelectTwo(newSelect);
  }
  function handleChangeThree(event, newSelect) {
    setSelectThree(newSelect);
  }
  function handleChangeFour(event) {
    const newSelect = event.target.value;
    setSelectFour(newSelect);
  }
  return (
    <Fragment>
      <ToggleButtonGroup value={select} exclusive onChange={handleChange}>
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>

      <Divider sx={{ my: 2 }} />

      {/* color */}
      <ToggleButtonGroup
        color="error"
        value={selectTwo}
        onChange={handleChangeTwo}
      >
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>
      <Divider sx={{ my: 2 }} />
      {/* multi selection */}
      <ToggleButtonGroup
        value={selectThree}
        onChange={handleChangeThree}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatItalicIcon />
          <FormatItalicIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Divider sx={{ my: 2 }} />
      {/* vertical,size */}
      <ToggleButtonGroup
        size="small"
        orientation="vertical"
        value={selectFour}
        onChange={handleChangeFour}
      >
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>
    </Fragment>
  );
}
