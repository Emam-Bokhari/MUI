import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Fragment, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ToogleButtonComponent() {
  const [toggle, setToggle] = useState("");

  const [alignment, setAlignment] = useState([]);

  function handleChange(event) {
    const toggleValue = event.target.value;
    console.log(event.target)
    setToggle(toggleValue);
  }
  //   multiple selection functionality
  function handleChangeAlignment(event,newAlignment) {
    setAlignment(newAlignment);
  }

  return (
    <Fragment>
      <ToggleButtonGroup value={toggle} onChange={handleChange} exclusive>
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>

      {/* alignment */}
      <ToggleButtonGroup orientation="vertical">
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>

      {/* multiple selection */}
      <ToggleButtonGroup
        size="small"
        value={alignment}
        onChange={handleChangeAlignment}
        aria-label="Mulitple Toggle Selection Button"
      >
        <ToggleButton value="bold">
          <FormatBoldIcon/>
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="fill" disabled>
          <FormatColorFillIcon />
        </ToggleButton>
        <ToggleButton value="dropDown" disabled>
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Fragment>
  );
}
