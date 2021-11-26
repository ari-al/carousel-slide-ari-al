import React from 'react';
import styled from 'styled-components';

const Card = ({children}) => {
  return (
      <Box>
          <children></children>
      </Box>
  );
}

const Box = styled.div`
`;


export default Card;
