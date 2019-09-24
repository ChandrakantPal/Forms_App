import React from 'react';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { NavLink } from 'react-router-dom';

const bottomNav = (props) => (
    <div>    
        <BottomNavigation showLabels>
            <NavLink to="/" exact>
                <BottomNavigationAction label="Users" icon={<PersonIcon />} />
            </NavLink>
            <NavLink to="/sites">
                <BottomNavigationAction label="Sites" icon={<ApartmentIcon />} />
            </NavLink>
        </BottomNavigation>
    </div>
);

export default bottomNav;