import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import '../css/styles.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="photo" src={require('../../img/opsilight.png').default} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>

          <NavBtnLink to='/About' activeStyle>
            <InfoOutlinedIcon />
            O nas
          </NavBtnLink>

          <NavBtnLink to='/map' activeStyle>
            <MapOutlinedIcon />
            Zemljevidi
          </NavBtnLink>

          <NavBtnLink to='/Dashboard' activeStyle>
            <MoreHorizOutlinedIcon />
            Več
          </NavBtnLink>

        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;