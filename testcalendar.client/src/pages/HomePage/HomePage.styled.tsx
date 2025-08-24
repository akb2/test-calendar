import styled, { css } from "styled-components";
import { containersPaddingsY } from "../../app/data/Theme";
import { AdaptiveFor } from "../../app/utils/Screens";

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${AdaptiveFor(containersPaddingsY)(
    (spaceY) => css`
      padding-bottom: ${spaceY}px;
    `,
  )}
`;

export const CalendarLabelLayout = styled.div`
  text-align: center;
`;

export const CalendarLabel = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const CalendarSubLabel = styled.div`
  font-size: 16px;
  text-transform: uppercase;
`;
