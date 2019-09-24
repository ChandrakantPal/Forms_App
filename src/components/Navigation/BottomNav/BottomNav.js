import React from 'react';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';

const bottomNav = (props) => (
    <div>    
        <BottomNavigation 
        showLabels>
        <BottomNavigationAction label="Users" icon={<PersonIcon />} />
        <BottomNavigationAction label="Sites" icon={<ApartmentIcon />} />
        </BottomNavigation>
    </div>
);

export default bottomNav;