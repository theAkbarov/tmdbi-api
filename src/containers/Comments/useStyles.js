import styled from "styled-components";

export const CommentWrapper = styled.form`
  display: flex;
  margin-bottom: 3.5rem;
  align-items: center;
  justify-content: space-between;
  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #16151a;
    background-color: #ffff4d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7rem;
    font-weight: 600;
  }
  input {
    width: 90%;
    flex-grow: 1;
    font-size: 0.875rem;
    margin-right: 0.7rem;
    padding: 0.7rem;
    border: none;
    color: rgb(255, 255, 255);
    background-color: rgb(45, 44, 50);
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
`;
export const Comments = styled.div`
  background: none;
  border: none;
`;
export const Person = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
export const Image = styled.img`
  width: 70px;
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
