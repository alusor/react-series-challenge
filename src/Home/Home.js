import React, { Component } from 'react';
import Container from '../CommonComponents/Container'
import { 
    Logo,
    TopBar,
    Search,
    GifCard,
    GifContent,
    UserName,
    Avatar,
    CardContent
} from './Home.styled'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: []
        };
    }
    async componentDidMount(){
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=C0tLIuj5RQbzzGZiVjXRpJAziWRxqEZV');
        const json = await response.json();
        console.log(json.data);
        this.setState({ gifs: json.data });
    }
    render(){
        const cards = this.state.gifs.map((gif) => (
            <GifContent>
                <GifCard alt={gif.title} src={gif.images.fixed_width.url} key={gif.id} />
                <CardContent>
                    <Avatar src={gif.user.avatar_url}/>
                    <UserName>{gif.user.username}</UserName>
                </CardContent>
            </GifContent>
        ));

        return (
            <Container>
                <TopBar>
                    <Logo to='/'>Giphy</Logo>
                    <Search placeholder='Found all the GIFs that you think' />
                </TopBar>
                { cards }
            </Container>
        );
    }
}

export default Home;