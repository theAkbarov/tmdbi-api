import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 4.5rem;
  @media screen and (max-width: 480px) {
    padding-top: 1rem;
  }
`;
export const UserinfoWrapper = styled.div`
  padding-left: 0.7rem;
  color: white;
`;
export const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  button {
    padding: 1rem 2rem;
    color: white;
    background: transparent;
    border: 1px solid white;
  }
`;
export const Data = styled.div`
  display: flex;
  img {
    margin-bottom: 1rem;
  }
  h3,
  h4 {
    color: white;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
