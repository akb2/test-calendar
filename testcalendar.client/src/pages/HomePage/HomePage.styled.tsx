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

export const CalendarLabel = styled.div``;
