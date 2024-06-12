import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ChangePasswordForm from "./components/ChangePasswordForm";

const AccountPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Stack paddingX={30}>
      <Stack
        width={"100%"}
        height={"auto"}
        flexDirection={"column"}
        bgcolor={"#F8DAD9"}
      >
        <Stack paddingY={1.5} paddingX={5}>
          <Typography
            fontSize={24}
            fontWeight={700}
            color={"#674342"}
            textAlign={"left"}
          >
            Account Settings
          </Typography>
        </Stack>
        <Divider sx={{ bgcolor: "white", borderColor: "white" }} />
        <Stack flexDirection={"row"}>
          <List
            disablePadding
            sx={{ width: "220px", borderRight: "1px solid white" }}
          >
            <ListItem
              disablePadding
              sx={{ bgcolor: selectedIndex === 0 ? "#964A52" : "#F8DAD9" }}
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText
                  primary="Profile"
                  sx={{
                    textAlign: "right",
                  }}
                  primaryTypographyProps={{
                    color: selectedIndex === 0 ? "white" : "#674342",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ bgcolor: selectedIndex === 1 ? "#964A52" : "#F8DAD9" }}
            >
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText
                  primary="Password"
                  sx={{
                    textAlign: "right",
                  }}
                  primaryTypographyProps={{
                    color: selectedIndex === 1 ? "white" : "#674342",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          {selectedIndex === 0 && <ProfileForm />}
          {selectedIndex === 1 && (
            <ChangePasswordForm changeIndex={() => setSelectedIndex(0)} />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AccountPage;
