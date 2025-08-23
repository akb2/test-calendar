import styled from "styled-components";
import {
  AnimationSpeed,
  DisabledColor,
  PrimaryColor,
} from "../../../data/Theme";

export const ButtonRoot = styled.button`
  display: inline-block;
  padding: 12px 30px;
  line-height: 22px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: ${DisabledColor};
  color: black;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: ${AnimationSpeed};

  &:hover {
    background-color: ${PrimaryColor};
    color: white;
  }
`;
