import React from "react";
import { H1 } from "./Titles.js";
import { Row } from "reactstrap";
import styled from "styled-components";

export const Sep = styled.div`
  font-weight: 200;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.light};

  @media (max-width: 480px) {
    padding: 40px 15px;
  }

  @media (min-width: 480px) {
    padding: 80px 15px;
  }
`;

export default ({ title }) => {
  return (
    <section className="section section-lg section-shaped pg-250 color-light">
      <Sep className="h-100">
        <Row className="align-items-center text-center w-100">
          <H1 className="w-100">{title}</H1>
        </Row>
      </Sep>
    </section>
  );
};
