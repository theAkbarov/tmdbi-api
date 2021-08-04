import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20vw;
  height: 50vh;
  background-color: white;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  z-index: 10 !important;
  input {
    padding: 4px;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: block;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 1rem;
  }

  button {
    color: black;
    float: right;
    font-weight: 600;
    padding: 4px 15px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    background-color: rgb(255, 255, 77);
  }
`;
export const UserAdd = styled.button`
  color: black;
  background: none;
  border: 1px solid rgb(255, 255, 77);
  padding: 4px 12px;
`;
export const User = styled.button`
  color: white;
  text-align: left;
  width: 100%;
  cursor: pointer;
  background: none;
  position: relative;
  display: block;
  border: 1px solid rgb(255, 255, 77);
  padding: 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 1rem 0;
  }
  h3 {
    color: white;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
export const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: black;
  font-weight: 600;
  cursor: grab;
  font-size: 20px;
  z-index: 9;
  background: rgb(255, 255, 77);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const UserData = styled.div`
  position: absolute;
  background: #16151a;
  top: 0;
  z-index: 10 !important;
  bottom: 0;
  left: 0;
  color: white !important;
  right: 0;
  margin: auto;
  width: 80vw;
  height: 70vh;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CloseButton = styled.button`
  border: 1px solid #aaa;
  border-radius: 3px;
  background: none;
  color: white;
  width: 30px;
  font-size: 20px;
  text-align: center;
  height: 30px;
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
