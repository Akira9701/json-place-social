import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';
import { key } from 'localforage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import { IRouteValue } from '../../types/routes';

interface ISidebarDesktop {
    Routes: {
        [key: string]: IRouteValue;
    };
}

const SidebarDesktop: React.FC<ISidebarDesktop> = ({ Routes }) => {
    return (
        <aside className="nav_container-desktop">
            <Box
                sx={{
                    width: '100%',
                    // maxWidth: 360,
                    // bgcolor: 'backg',
                }}
            >
                <nav aria-label="main mailbox folders">
                    <List>
                        {Object.values(Routes).map((el: IRouteValue) => {
                            return (
                                <ListItem key={el.name} disablePadding>
                                    <NavLink
                                        to={`/${el.link}`}
                                        relative="path"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'nav_container-desktop-disable-item'
                                                : isActive
                                                    ? 'nav_container-desktop-active-item'
                                                    : ''
                                        }
                                    >
                                        <ListItemButton
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            {/* <ListItemIcon> */}
                                            {/* <FavoriteIcon /> */}
                                            {/* </ListItemIcon> */}
                                            <ListItemText
                                                className="nav_container-desktop-item-text"
                                                primary={el.name}
                                            />
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            );
                        })}
                    </List>
                </nav>
            </Box>
        </aside>
    );
};

export default SidebarDesktop;
