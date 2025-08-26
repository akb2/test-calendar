import { css, styled } from "styled-components";

const CurrentDateNode = css`
  display: block;
  font-size: 19px;
  font-weight: normal;
  line-height: 1.25;
`;

export const CurrentDateRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CurrentDateTitle = styled.time`
  ${CurrentDateNode}

  font-size: 12px;
  opacity: 0.9;
`;

export const CurrentDateSubTitleOverlay = styled.time`
  height: auto;
  line-height: 1;
  text-align: right;
`;

export const CurrentDateSubTitle = styled.span`
  ${CurrentDateNode}

  display: inline-block;
  font-weight: bold;
  text-align: left;
  vertical-align: top;

  &.digit {
    width: 22px;
  }
`;
