import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SidebarMobile() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <aside>
      <BottomNavigation
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#242424',
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Posts"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Profile"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Friends"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </aside>
  );
}
