import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Menu} from '@styled-icons/boxicons-regular/Menu';

export const NavBarContainer = styled.nav`
  background: black;
  height: 20vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  //align-content:  center; 
  align-items: center;

`;
const HamburgerMenu = styled(Menu)`
  color: white;
  //font-size: 0.25em;
  padding: 0.5em;
  width: 3em;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #282525;
    border-radius: 50%;
  }

  z-index: 1;
`;
export const NavBarLink = styled.a`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  //margin: 10px;
  

  border-bottom: 0px solid white;
  transition: border-bottom-width 0.2s ease-in-out;

  &:hover {
    border-bottom-width: 2px;
    cursor: pointer;
  }

`

export const Drawer = styled.div`
  position: fixed;
  // display: ${props => props.display ? 'block' : 'none'};
  left: 0;
  width: 30vw;
  height: 100vh;
  background: blue;
  z-index: 3;
  overflow-x: hidden;
  transition: transform 0.5s
    ease - in -out 0.5s;
`;

interface NavBarProps {
    items: Array<String>;
}

const NavBar = (props: NavBarProps) => {
    const [drawer, setDrawer] = useState(true);

    useEffect(() => {
        document.getElementById("drawer")?.focus();
    }, [drawer])

    const handleDisplay = () => {
        setDrawer(true);
        document.getElementById("drawer")?.focus();

    }
    const closeDisplay = () => {
        setDrawer(false);
    }

    return (
        <NavBarContainer>
            <HamburgerMenu
                onClick={handleDisplay}
            >
            </HamburgerMenu>
            {props.items.map((item) => {
                return <NavBarLink>{item}</NavBarLink>
            })}
            {/*<Drawer*/}
            {/*    id={"drawer"}*/}
            {/*    display={drawer}*/}
            {/*    tabIndex='1'*/}
            {/*    onFocus={handleDisplay}*/}
            {/*    onBlur={closeDisplay}>*/}
            {/*</Drawer>*/}
        </NavBarContainer>
    );
};

export default NavBar;