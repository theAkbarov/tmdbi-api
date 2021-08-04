import styled from "styled-components";

export const Hero = styled.div`
  background-color: #16151a;
  padding-top: 3.6rem;
  .slick-list {
    max-height: 60vh;
  }
  @media screen and (max-width: 480px) {
    padding-top: 0;
  }
`;

export const Heading = styled.h2`
  font-size: 1.625rem;
  color: #fff;
  font-weight: 600;
`;
