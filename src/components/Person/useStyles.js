import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all ease 0.5s;
  display: flex;
  margin-bottom: 24px;
`;
export const Image = styled.img`
  width: 70px;
  transition: all ease 0.5s;
  height: 70px;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  margin-right: 1rem;
`;
export const Content = styled.div`
  background-color: #2d2c32;
  border-radius: 4px;
  padding: 0.7rem;
  color: white;
  p {
    font-size: 0.875rem;
    color: #fff;
    max-height: 45px;
    transition: all ease 0.5s;
    overflow: hidden;
    &.more {
      max-height: none;
      overflow: visible;
    }
  }
  h3 {
    flex: 1 0 auto;
    color: white;
    margin-right: 3rem;
  }
  button {
    color: rgb(255, 255, 77);
    background: none;
    border: none;
    outline: none;
    float: right;
  }
`;
