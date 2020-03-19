import styled from "styled-components";

export const Skew = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    clip-path: polygon(
      0 0,
      100% 0%,
      100% 100%,
      0% 100%,
      calc(0% + 40px) 70%,
      calc(0% + 30px) 50%
    );
  }
`;

export const Gradient = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: -moz-linear-gradient(
      top,
      rgba(${props => props.theme.primary}, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(255, 255, 255, 0)),
      color-stop(100%, rgba(${props => props.theme.primary}, 1))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(${props => props.theme.primary}, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(${props => props.theme.primary}, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(${props => props.theme.primary}, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(${props => props.theme.primary}, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    ); /* W3C */
  }
`;

export const Overlay = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: ${props => props.theme.dark};
    opacity: 0.5;
  }
`;

export const Floating = styled.span`
  position: absolute;
  padding: 0 15%;
  z-index: 1;
  top: 50%;
`;
