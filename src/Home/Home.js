import React, { Component } from 'react';
import Container from '../CommonComponents/Container'
import { 
    Logo,
    TopBar,
    Search
} from './Home.styled'

class Home extends Component {

    render(){
        return (
            <Container>
                <TopBar>
                    <Logo to='/'>Giphy</Logo>
                    <Search placeholder='Found all the GIFs that you think' />
                </TopBar>
            </Container>
        );
    }
}

export default Home;