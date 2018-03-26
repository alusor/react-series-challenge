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
    width: 100%;
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

const GifCard = styled.img`
  height: 150px;
`;
const GifContent = styled.div`
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  margin: 10px 2px;
  background: rgba(255,255,255,1);
`;
const UserName = styled.span`
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
  color: rgba(50,50,50,.7);
`;
const Avatar = styled.div`
    background: #fff url('${props => props.src}');
    background-size: cover;
    height: 44px;
    width: 44px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    margin: 5px;
    border-radius: 22px;
    content: "hola";
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
`;
export {
    Logo,
    TopBar,
    Search,
    GifCard,
    GifContent,
    UserName,
    Avatar,
    CardContent,
    
};