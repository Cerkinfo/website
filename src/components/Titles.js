import styled from 'styled-components';

export const H1 = styled.h1`
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Subtitle = styled.h6`
  font-family: 'Fjalla One', sans-serif;
  font-weight: 200;
  opacity: 0.7;
`;

export const H2 = styled.h2`
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Text = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
  opacity: 0.7;
`;


export const H3 = styled.h3`
  font-family: 'Fjalla One', sans-serif;
  font-weight: 400;
`;

export const Center = styled.div`
  padding-top: 50px;
  width: 50%;
  margin: auto;
`;

export const Quote = styled.p`
  padding: 0 15px;
  text-align: right;
  font-family: 'Fjalla One', sans-serif;
  font-style: italic;
  font-weight: 200;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.light};

  &:before {
    content: "«";
  }

  &:after {
    content: "»";
  }
`;

export const Cite = styled.p`
  text-align: right;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  color: ${props => props.theme.white};
`
