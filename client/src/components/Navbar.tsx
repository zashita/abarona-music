import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import {router} from "next/client";
import {useRouter} from "next/router";

export const drawerWidth = 300;

const menuPages = [
    {text: 'Main', href: '/'},
    {text: 'Verified tracks', href: '/verified'},
    {text: 'Uploaded tracks', href: '/tracks'},
]

const subMenuPages = [
    {text: 'Upload track', href: '/tracks/create'},
    {text: 'Liked', href: ''}
]

export default function Navbar() {
    const router = useRouter();
    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` , bgcolor: '#ff920b'}}
            >
                <Toolbar style={{width: '100%'}}>
                    <Typography variant="h6" noWrap component="div">
                        ZASHITA music
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: '#3b3b3b', p: 3 }}
            >
                <Toolbar />

            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        bgcolor: '#ff920b',
                        border: 0,
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List  sx={{ bgcolor: '#ff920b', p: 3 }}>
                    {menuPages.map(({text, href}, index) => (
                        <ListItem onClick={() => router.push(href)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <CloudDoneIcon />}
                                    {}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List sx={{ bgcolor: '#ff920b', p: 3 }}>
                    {subMenuPages.map(({text, href}, index) => (
                        <ListItem key={index} onClick={()=> router.push(href)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
