import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';
import React from "react";
import Nightlight from "@mui/icons-material/Nightlight";
import HomeIcon from '@mui/icons-material/Home';
import { Home } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';

import SettingsIcon from '@mui/icons-material/Settings';
export const Silde = ()=>{
   



    return(
        <Box   flex={1} p={2} textAlign="center"  sx={{display:{xs:"none", sm:"block"}}}>
            <Box position={"fixed"}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                           <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                          <PeopleIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CommentIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Message" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Setting" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Diversity3Icon/>
                        </ListItemIcon>
                            <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StoreIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Market" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Group" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Nightlight/>
                        </ListItemIcon>
                        <Switch  defaultChecked />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>

        </Box>
    )
}