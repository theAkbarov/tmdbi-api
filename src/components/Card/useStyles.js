import styled from "styled-components";
export const CardHolder = styled.div`
  background-color: #2d2c32;
  box-shadow: 0px 0px 17px 15px rgb(25 24 24 / 42%) inset;
  h3 {
    box-shadow: inset 0px -50px 28px -1px rgba(0, 0, 0, 0.63);
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 70px;
  }
  .shadow {
    position: relative;
    display: block;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7071603641456583) 24%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  @media screen and (max-width: 480px) {
    padding-top: 0;
  }
`;
export const Shadow = styled.div``;
