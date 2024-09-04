import { Fragment, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LaptopIcon from "@mui/icons-material/Laptop";
import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ToogleButtonComponent() {
  const [active, setActive] = useState("ios");
  const [alignment, setAlignment] = useState([]);
  const [view, setView] = useState("list");
  const [devices, setDevices] = useState("laptop");

  function handleChange(event, newActive) {
    setActive(newActive);
  }

  function handleChangeAlignment(event, newAlignment) {
    setAlignment(newAlignment);
  }

  function handleChangeView(event, newView) {
    setView(newView);
  }

  function handleChangeDevices(event, newDevices) {
    // console.log(newDevices);
    if (newDevices.length) {
      setDevices(newDevices);
    }
    /* amra chaile aivbe o samne kaj ta e korte pari
     if(newDevices!==null){
      setDevices(newDevices)
     } */
  }

  return (
    <Fragment>
      {/* exclusive selection,color */}
      <ToggleButtonGroup
        exclusive
        value={active}
        onChange={handleChange}
        color="primary"
        aria-label="Exclusive Toggle Selection Button"
      >
        <ToggleButton value="Web">Web</ToggleButton>
        <ToggleButton value="App">App</ToggleButton>
        <ToggleButton value="ios">ios</ToggleButton>
      </ToggleButtonGroup>
      {/* multiple selection,size */}
      <ToggleButtonGroup
        size="small"
        value={alignment}
        onChange={handleChangeAlignment}
        aria-label="Mulitple Toggle Selection Button"
      >
        <ToggleButton value="bold">
          <FormatBoldIcon />
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

      {/* vertical alignment */}
      <ToggleButtonGroup value={view} onChange={handleChangeView} exclusive>
        <ToggleButton value="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="quilt">
          <ViewQuiltIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      {/* enforce alignment */}
      <ToggleButtonGroup
        value={devices}
        onChange={handleChangeDevices}
        exclusive
        aria-label="Devices Button Group"
      >
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Fragment>
  );
}
