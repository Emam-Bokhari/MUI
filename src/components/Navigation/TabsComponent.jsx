import { Fragment, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

export default function TabsComponent() {
  const [value, setValue] = useState("All");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Fragment>
      {/* basic tabs */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="All" value="1" />
            <Tab label="Frontend" value="2" />
            <Tab label="Backend" value="3" />
            <Tab label="Others" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Fragment>
  );
}
