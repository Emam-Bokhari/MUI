import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import { Fragment } from "react";
import FolderIcon from "@mui/icons-material/Folder";

export default function AvatarComponent() {
  return (
    <Fragment>
      {/* basic avatar */}
      <Stack direction="row" spacing={2}>
        <Avatar
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid"
          alt="Moshfiqur Rahman"
        />
        <Avatar
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="Emam Bokhari"
        />
      </Stack>
      {/* letter avatar */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "15px" }}>
        <Avatar alt="E" sx={{ backgroundColor: "deeppink" }}>
          E
        </Avatar>
        <Avatar alt="T" sx={{ backgroundColor: "deepskyblue" }}>
          T
        </Avatar>
        <Avatar alt="M" sx={{ backgroundColor: "violet" }}>
          M
        </Avatar>
      </Stack>
      {/* size */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "15px" }}>
        <Avatar sx={{ height: 28, width: 28 }}>A</Avatar>
        <Avatar sx={{ height: 38, width: 38 }}>A</Avatar>
        <Avatar sx={{ height: 48, width: 48 }}>A</Avatar>
      </Stack>
      {/* icon avatar */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "15px" }}>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </Stack>
      {/* variants */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "15px" }}>
        <Avatar variant="circular">
          <FolderIcon />
        </Avatar>
        <Avatar variant="square">
          <FolderIcon />
        </Avatar>
        <Avatar variant="rounded">
          <FolderIcon />
        </Avatar>
      </Stack>
      {/* avatar group */}
     <Box sx={{marginLeft:0,width:"fit-content",marginTop:2}} >
     <AvatarGroup  max={4}>
        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />
        
        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />
      </AvatarGroup>
     </Box>

      {/* avatar group total*/}
     <Box sx={{marginLeft:0,width:"fit-content",marginTop:2}} >
     <AvatarGroup  total={22}>
        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />

        <Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid" />
      </AvatarGroup>
     </Box>
    </Fragment>
  );
}
