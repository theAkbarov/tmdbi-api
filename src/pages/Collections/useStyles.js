import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 3.7rem;
  color: white;
  @media screen and (max-width: 480px) {
    padding-top: 1rem;
  }
`;

export const Text = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: white;
`;
export const Banner = styled.div`
  position: relative;
  background-size: contain;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .share-button {
    position: absolute;
    right: 30px;
    top: 30px;
    background: #ffff4d;
    cursor: pointer;
    border: none;
    padding: 0.6rem;
    border-radius: 5px;
  }
`;
