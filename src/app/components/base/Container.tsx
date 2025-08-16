import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { AdaptiveFor, BreakPointsObject } from "../../../shared/lib/Screens";

const widths: BreakPointsObject<number> = {
  default: 600,
  xxsmall: 400,
  middle: 900,
  large: 1200,
  xlarge: 1600,
};

const paddingsY: BreakPointsObject<number> = {
  default: 15,
  small: 30,
  middle: 45,
  large: 60,
  xlarge: 90,
};

const Root = styled.div<{ noPadding?: boolean }>`
  ${({ noPadding }) =>
    AdaptiveFor(
      widths,
      paddingsY,
    )(
      (width, paddingY) => css`
        width: ${width}px;
        padding-left: 15px;
        padding-right: 15px;

        ${noPadding
          ? ""
          : css`
              padding-top: ${paddingY}px;
              padding-bottom: ${paddingY}px;
            `}
      `,
    )}

  max-width: 100%;
  margin: 0 auto;
`;

export const Container = ({
  children,
  noPadding,
}: PropsWithChildren<{ noPadding?: boolean }>) => (
  <Root noPadding={noPadding}>{children}</Root>
);
