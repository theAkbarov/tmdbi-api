import styled from "styled-components";

export const Appbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 11199999;
  bottom: 0;
  width: 100%;
  background: #16151a;
  a {
    padding: 1rem;
    transition: all ease 0.5s;
    border-radius: 6px;
    opacity: 0.3;
    &.active {
      opacity: 1;
      background: rgba(45, 44, 50, 0.5);
    }
  }
  img {
    width: 30px;
  }
`;
export const SearchButton = styled.div``;
