import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    .w50 {
      width: 48%;
    }
  }
`;

export const Heart = styled.svg`
  fill: whitesmoke;
  &.added {
    fill: #d7443e;
  }
`;
