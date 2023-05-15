
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #fff;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

// const StyledButton = styled(Button)`
//   color: #blue ;    
//   background-color: #fafafa;

// `;

const StyledButton = styled(Button)`
    margin: 0px;
    width: 85%;
    background: #6495ed;
    color: #fff;
    text-decoration: none;
`;

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
            <Link to="/">
            <StyledButton>HOME</StyledButton>
            </Link>
            <Link to="/about">
            <StyledButton>ABOUT</StyledButton>
            </Link>
            <Link to="/contact">
            <StyledButton>CONTACT</StyledButton>
            </Link>
            <Link to="/account">
            <StyledButton onClick={() => logout()}>LOGOUT</StyledButton>
            </Link>
            </Container>
        </Component>
    )
}

export default Header;