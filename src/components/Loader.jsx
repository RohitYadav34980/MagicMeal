import React from 'react';
import styled from 'styled-components';

export default function Loader (){
  return (
    <StyledWrapper>
      <div className="spinner" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .spinner {
    width: 12px;
    height: 12px;
    display: grid;
    animation: spinner-plncf9 3s infinite;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    border: 9px solid;
    border-radius: 50%;
    border-color: #474bff #474bff #0000 #0000;
    mix-blend-mode: darken;
    animation: spinner-plncf9 1s infinite linear;
  }

  .spinner::after {
    border-color: #0000 #0000 #dbdcef #dbdcef;
    animation-direction: reverse;
  }

  @keyframes spinner-plncf9 {
    100% {
      transform: rotate(1turn);
    }
  }`;


