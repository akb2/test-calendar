import { styled } from "styled-components";

const CurrentDateNode = styled.time`
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

export const CurrentDateTitle = styled(CurrentDateNode)`
  font-size: 12px;
  opacity: 0.9;
`;

export const CurrentDateSubTitle = styled(CurrentDateNode)`
  font-weight: bold;
  width: 87px;
  text-align: left;
`;
