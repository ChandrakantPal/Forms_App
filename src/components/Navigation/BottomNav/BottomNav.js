import React from 'react';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Link } from 'react-router-dom';

const bottomNav = (props) => (
    <div style={{width: '100%', position: 'fixed',top: 'auto', bottom: 0}}>    
        <BottomNavigation showLabels>
            <BottomNavigationAction component={Link} to="/"  label="Users" icon={<PersonIcon />} />
            <BottomNavigationAction component={Link} to="/sites" label="Sites" icon={<ApartmentIcon />} />
        </BottomNavigation>
    </div>
);

export default bottomNav;