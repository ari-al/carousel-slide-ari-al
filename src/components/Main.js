import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
//import Card from './Card';

const Main = () => {
  return (
      <Wrap>
          <Container>
            <Carousel multiple={true}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Carousel>
          </Container>
          {/* <Container>
            <Carousel multiple={false}>
                <BigCard></BigCard>
                <BigCard></BigCard>
                <BigCard></BigCard>
            </Carousel>
          </Container> */}
      </Wrap>
  );
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
`;

const Card = styled.div`
    width: 282px;
    height: 220px;
    background: #e3e3e3;
    margin-right: 5px;
`;

const BigCard = styled.div`
    width: 482px;
    height: 420px;
    background: #e3e3e3;
    margin-right: 5px;
`;
export default Main;
