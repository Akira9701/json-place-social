import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import { IRouteValue } from '../../types/routes';

const SidebarMobile = () => {
    const [value, setValue] = React.useState('recents');
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, valueLink: string) => {
        setValue(valueLink);
        navigate(`/${valueLink}`);
    };

    return (
        <aside className="nav_container-mobile">
            <BottomNavigation
                sx={{
                    width: '100%',
                    backgroundColor: '#242424',
                    borderTop: 'solid #1976d2 0.1px',
                }}
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="Posts"
                    value="all-posts"
                    icon={<FavoriteIcon />}
                />

                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="Profile"
                    value="profile"
                    icon={<AccountCircleIcon />}
                />
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="Friends"
                    value="friends"
                    icon={<GroupIcon />}
                />
            </BottomNavigation>
        </aside>
    );
};
export default SidebarMobile;
