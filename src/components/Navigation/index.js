import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { AuthUserContext } from '../Session';

import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { Container } from 'styled-container-component';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => 
                authUser ? (
                    <NavigationAuth authUser={authUser} />
                    ) : (
                    <NavigationNonAuth />
                    )
            }
        </AuthUserContext.Consumer>
    </div>
    );

const NavigationAuth = ({ authUser }) => (
    <Container fluid>
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
                <Link to={ROUTES.LANDING}>
                    <NavbarLink light>Landing</NavbarLink>
                </Link>
                
                <Link to={ROUTES.HOME}>
                    <NavbarLink light>Home</NavbarLink>
                </Link>
                    
                <Link to={ROUTES.ACCOUNT}>
                    <NavbarLink light>Account</NavbarLink>
                </Link> 
                {authUser.roles.includes(ROLES.ADMIN) && 
                    (
                        <Link to={ROUTES.ADMIN}>
                            <NavbarLink light>Admin</NavbarLink>
                        </Link>
                    )
                }     
                <SignOutButton />
            </Nav>
          </Navbar>
        </Container>
    </Container>
);

const NavigationNonAuth = () => (
    <Container fluid>
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
                <Link to={ROUTES.LANDING}>
                    <NavbarLink light>Landing</NavbarLink>
                </Link>
                <Link to={ROUTES.SIGNIN}>
                    <NavbarLink light>Sign In</NavbarLink>
                </Link>
            </Nav>
          </Navbar>
        </Container>
    </Container>
);

export default Navigation;