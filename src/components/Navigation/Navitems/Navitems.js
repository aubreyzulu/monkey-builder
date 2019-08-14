import React from 'react';
import NavItem from './Navitem/Navitem';
import classes from './Navitems.module.css'

const navigationItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Burger builder</NavItem>
        <NavItem link="/">checkout</NavItem>
    </ul>
);



export default navigationItems;