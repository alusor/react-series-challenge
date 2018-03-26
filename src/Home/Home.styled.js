import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Logo = styled(Link)`
    color: white;
    font-size: 2rem;
    padding: 5px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
`;

const TopBar = styled.div`
    display: flex;
`;

const Search = styled.input`
    flex-grow: 1;
    margin: 7px 0px 7px 1rem;
    font-size: 1rem;
    text-align: center;
    outline: none;
    border: none;
    background: rgba(0,0,0,0.5);
    color: white;
    &::placeholder {
    color: rgba(255,255,255,0.8);
  }
`;
export {
    Logo,
    TopBar,
    Search
};