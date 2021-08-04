import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  color: hsla(0, 0%, 100%, 0.5);
  margin: 0 0 0.3rem 0.5rem;
  user-select: none;
`;

export const InputHolder = styled.div``;

export const FormControl = styled.input`
  align-items: center;
  background-color: rgb(45, 44, 50);
  border-color: rgb(45, 44, 50);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms ease 0s;
  box-sizing: border-box;
  font-size: 0.9375rem;
  padding: 0 10px;
  outline: 0px !important;
`;
