import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
        display: flex;
        justify-content: center;
         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const Content = styled.div`
    padding: 1rem 0rem;
    flex: 1;
    max-width: 920px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
`;

const Container = ({ children }) => (
    <Layout>
        <Content>
        {children}
        </Content>
    </Layout>
);

export default Container;