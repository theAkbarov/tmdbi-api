import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.92);
  color: white;
  position: absolute;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  top: -100vh;
  transition: 0.2s all ease;
  left: 0;
  opacity: 0;
  &.show {
    top: 0;
    opacity: 1;
  }
  .form {
    font-size: 0.875rem;
    font-weight: 600;
    border-color: #2d2c32;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    color: #fff;
    display: flex;
    margin-top: 1.5rem;
    @media screen and (max-width: 480px) {
      margin-top: 4.5rem;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  background-color: #2d2c32;
  outline: none;
  border-radius: 6px;
  border: none;
  padding: 0.5rem 3rem 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  border-color: #2d2c32;
`;
export const Button = styled.button`
  background: none;
  border-color: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
`;
export const Output = styled.ul`
  padding: 0;
  display: block;
  border-radius: 6px;
  overflow: hidden;
  width: 96%;
`;
export const ListItem = styled.li`
  list-style: none;
  box-sizing: border-box;
  transition: all ease 0.3s;
  &:hover {
    background: #ffff4d;
    h3,
    p {
      color: black;
    }
  }
  color: #fff;
  padding: 12px 16px;
  border-bottom: 1px solid #252525;
  background-color: #2d2c32;
  a {
    display: flex;
    img {
      display: block;
      width: 3.2rem;
      height: 4.55rem;
      object-fit: cover;
      box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 20%),
        0 0.3rem 0.3rem rgb(0 0 0 / 20%), 0 0.5rem 0.5rem rgb(0 0 0 / 20%),
        0 0.7rem 0.7rem rgb(0 0 0 / 20%);
    }
  }
`;

export const Datas = styled.div`
  padding-left: 1rem;
  p {
    font-size: 0.6875rem;
    font-weight: 300;
    color: hsla(0, 0%, 100%, 0.8);
    margin: 0;
  }
  h3 {
    color: white;
    font-size: 0.9375rem;
  }
`;
export const Switcher = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 10rem;

  @media screen and (max-width: 480px) {
    right: 1rem;
    button {
      display: inline-block;
      margin: 0 4px;
    }
  }
`;
export const PrimaryBtn = styled.button`
    background: yellow;
    border: none;
    font-weight: 600;
    padding: 4px 8px;
    transition: all ease 0.4s;
    transform: scale(.9);
    opacity: .5;
    margin:  4px 0;
    color: black;
    border-radius: 4px;
    display: block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
      transform: scale(1.1);
      opacity: 1;
    }
    &.results{
      opacity: 1;
      width: 100%;
      padding: .7rem;
      cursor: pointer;
      font-size: 18px;
      color: inherit
      &:hover{
        opacity: .5;
      }
    }
`;
