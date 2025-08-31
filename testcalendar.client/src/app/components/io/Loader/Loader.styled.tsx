import styled from "styled-components";
import { PrimaryColor } from "../../../data/Theme";
import type { LoaderAnimationProps, LoaderTitleProps } from "./Loader.types";

export const LoaderRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 16px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LoaderAnimation = styled.div<LoaderAnimationProps>`
  border: ${({ $borderSize }) => $borderSize + "px"} solid transparent;
  border-radius: 50%;
  width: ${({ $size }) => $size + "px"};
  height: ${({ $size }) => $size + "px"};
  animation:
    changeBorder 4s ease-in-out infinite,
    rotate 1s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes changeBorder {
    0% {
      border-color: transparent;
      border-top-color: ${PrimaryColor};
    }
    25% {
      border-color: transparent;
      border-right-color: ${PrimaryColor};
    }
    50% {
      border-color: transparent;
      border-bottom-color: ${PrimaryColor};
    }
    75% {
      border-color: transparent;
      border-left-color: ${PrimaryColor};
    }
    100% {
      border-color: transparent;
      border-top-color: ${PrimaryColor};
    }
  }
`;

export const LoaderTitle = styled.span<LoaderTitleProps>`
  font-size: ${({ $size }) => $size + "px"};
  font-weight: bold;
  color: black;
  text-transform: uppercase;
`;
